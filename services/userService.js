import { prisma } from '../lib/prisma'
import { hashPassword, verifyPassword, createSession } from '../lib/auth'
import { signupSchema, loginSchema, updateUserSchema, changePasswordSchema } from '../lib/validation'

export class UserService {
  static async createUser(userData) {
    const { error, value } = signupSchema.validate(userData)
    if (error) throw new Error(error.details[0].message)

    const { firstName, lastName, email, phone, password, roleId } = value

    // Check if user exists
    const existingUser = await prisma.user.findUnique({ where: { email } })
    if (existingUser) throw new Error('User already exists')

    // Verify role exists
    const role = await prisma.role.findUnique({ where: { id: roleId } })
    if (!role) throw new Error('Invalid role')

    // Hash password and create user
    const hashedPassword = await hashPassword(password)
    
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        password: hashedPassword,
        roleId
      },
      include: { role: true }
    })

    const token = await createSession(user.id)
    
    return {
      user: this.sanitizeUser(user),
      token
    }
  }

  static async authenticateUser(credentials) {
    const { error, value } = loginSchema.validate(credentials)
    if (error) throw new Error(error.details[0].message)

    const { email, password } = value

    const user = await prisma.user.findUnique({
      where: { email },
      include: { role: true }
    })

    if (!user || !await verifyPassword(password, user.password)) {
      throw new Error('Invalid credentials')
    }

    if (!user.isActive) {
      throw new Error('Account is deactivated')
    }

    // Update last login
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() }
    })

    const token = await createSession(user.id)
    
    return {
      user: this.sanitizeUser(user),
      token
    }
  }

  static async getUserById(id) {
    const user = await prisma.user.findUnique({
      where: { id },
      include: { role: true }
    })
    
    return user ? this.sanitizeUser(user) : null
  }

  static async updateUser(id, updateData) {
    const { error, value } = updateUserSchema.validate(updateData)
    if (error) throw new Error(error.details[0].message)

    if (value.roleId) {
      const role = await prisma.role.findUnique({ where: { id: value.roleId } })
      if (!role) throw new Error('Invalid role')
    }

    const user = await prisma.user.update({
      where: { id },
      data: value,
      include: { role: true }
    })

    return this.sanitizeUser(user)
  }

  static async changePassword(id, passwordData) {
    const { error, value } = changePasswordSchema.validate(passwordData)
    if (error) throw new Error(error.details[0].message)

    const user = await prisma.user.findUnique({ where: { id } })
    if (!user) throw new Error('User not found')

    const isValid = await verifyPassword(value.currentPassword, user.password)
    if (!isValid) throw new Error('Current password is incorrect')

    const hashedPassword = await hashPassword(value.newPassword)
    
    await prisma.user.update({
      where: { id },
      data: { password: hashedPassword }
    })

    return { success: true }
  }

  static async getAllUsers(filters = {}) {
    const where = {}
    
    if (filters.roleId) where.roleId = filters.roleId
    if (filters.isActive !== undefined) where.isActive = filters.isActive
    if (filters.search) {
      where.OR = [
        { firstName: { contains: filters.search, mode: 'insensitive' } },
        { lastName: { contains: filters.search, mode: 'insensitive' } },
        { email: { contains: filters.search, mode: 'insensitive' } }
      ]
    }

    const users = await prisma.user.findMany({
      where,
      include: { role: true },
      orderBy: { createdAt: 'desc' }
    })

    return users.map(user => this.sanitizeUser(user))
  }

  static async deactivateUser(id) {
    const user = await prisma.user.update({
      where: { id },
      data: { isActive: false },
      include: { role: true }
    })

    // Revoke all sessions
    await prisma.session.deleteMany({ where: { userId: id } })

    return this.sanitizeUser(user)
  }

  static sanitizeUser(user) {
    const { password, ...sanitized } = user
    return sanitized
  }
}