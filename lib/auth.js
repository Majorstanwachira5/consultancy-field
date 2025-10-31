import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { prisma } from './prisma'

export const hashPassword = async (password) => {
  return bcrypt.hash(password, parseInt(process.env.BCRYPT_ROUNDS) || 12)
}

export const verifyPassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword)
}

export const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d'
  })
}

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET)
  } catch (error) {
    return null
  }
}

export const createSession = async (userId) => {
  const token = generateToken(userId)
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
  
  await prisma.session.create({
    data: {
      userId,
      token,
      expiresAt
    }
  })
  
  return token
}

export const validateSession = async (token) => {
  if (!token) return null
  
  const session = await prisma.session.findUnique({
    where: { token },
    include: { user: { include: { role: true } } }
  })
  
  if (!session || session.expiresAt < new Date()) {
    if (session) {
      await prisma.session.delete({ where: { id: session.id } })
    }
    return null
  }
  
  return session.user
}

export const revokeSession = async (token) => {
  await prisma.session.deleteMany({ where: { token } })
}