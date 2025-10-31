import { prisma } from '../lib/prisma'

export class RoleService {
  static async getAllRoles() {
    return await prisma.role.findMany({
      orderBy: { name: 'asc' }
    })
  }

  static async getRoleById(id) {
    return await prisma.role.findUnique({
      where: { id },
      include: { _count: { select: { users: true } } }
    })
  }

  static async createRole(roleData) {
    const { name, description, permissions } = roleData
    
    if (!name) throw new Error('Role name is required')
    
    const existingRole = await prisma.role.findUnique({ where: { name } })
    if (existingRole) throw new Error('Role already exists')

    return await prisma.role.create({
      data: { name, description, permissions }
    })
  }

  static async updateRole(id, updateData) {
    const { name, description, permissions } = updateData
    
    if (name) {
      const existingRole = await prisma.role.findFirst({
        where: { name, NOT: { id } }
      })
      if (existingRole) throw new Error('Role name already exists')
    }

    return await prisma.role.update({
      where: { id },
      data: { name, description, permissions }
    })
  }

  static async deleteRole(id) {
    // Check if role has users
    const roleWithUsers = await prisma.role.findUnique({
      where: { id },
      include: { _count: { select: { users: true } } }
    })

    if (!roleWithUsers) throw new Error('Role not found')
    if (roleWithUsers._count.users > 0) {
      throw new Error('Cannot delete role with assigned users')
    }

    await prisma.role.delete({ where: { id } })
    return { success: true }
  }
}