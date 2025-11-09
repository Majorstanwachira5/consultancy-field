import { prisma } from './prisma'
import { hashPassword } from './auth'

export class DatabaseService {
  // User Management
  static async createUser(userData) {
    const hashedPassword = await hashPassword(userData.password)
    return await prisma.user.create({
      data: {
        ...userData,
        password: hashedPassword
      },
      include: { role: true }
    })
  }

  static async getUserByEmail(email) {
    return await prisma.user.findUnique({
      where: { email },
      include: { role: true }
    })
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

    return await prisma.user.findMany({
      where,
      include: { role: true },
      orderBy: { createdAt: 'desc' }
    })
  }

  // Project Management
  static async createProject(projectData) {
    return await prisma.project.create({
      data: projectData
    })
  }

  static async getAllProjects(filters = {}) {
    const where = {}
    if (filters.status) where.status = filters.status
    if (filters.service) where.service = filters.service
    if (filters.search) {
      where.OR = [
        { title: { contains: filters.search, mode: 'insensitive' } },
        { client: { contains: filters.search, mode: 'insensitive' } }
      ]
    }

    return await prisma.project.findMany({
      where,
      orderBy: { createdAt: 'desc' }
    })
  }

  // Service Requests
  static async createServiceRequest(requestData) {
    return await prisma.serviceRequest.create({
      data: requestData
    })
  }

  static async getAllServiceRequests(filters = {}) {
    const where = {}
    if (filters.status) where.status = filters.status
    if (filters.service) where.service = filters.service
    if (filters.priority) where.priority = filters.priority

    return await prisma.serviceRequest.findMany({
      where,
      orderBy: { createdAt: 'desc' }
    })
  }

  // Analytics
  static async getDashboardStats() {
    const [totalUsers, activeProjects, pendingRequests, completedProjects] = await Promise.all([
      prisma.user.count(),
      prisma.project.count({ where: { status: 'In Progress' } }),
      prisma.serviceRequest.count({ where: { status: { in: ['New', 'In Review'] } } }),
      prisma.project.count({ where: { status: 'Completed' } })
    ])

    return {
      totalUsers,
      activeProjects,
      pendingRequests,
      completedProjects,
      monthlyRevenue: 125000, // Mock data
      newUsersThisMonth: 89
    }
  }
}