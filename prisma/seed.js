const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')
const prisma = new PrismaClient()

async function main() {
  // Create default roles for consultancy
  const roles = [
    {
      name: 'admin',
      description: 'Full system access',
      permissions: JSON.stringify({ all: true })
    },
    {
      name: 'consultant',
      description: 'Senior consultant with client management access',
      permissions: JSON.stringify({ clients: true, reports: true, cases: true })
    },
    {
      name: 'analyst',
      description: 'Data protection analyst',
      permissions: JSON.stringify({ reports: true, cases: 'read' })
    },
    {
      name: 'client',
      description: 'Client user with limited access',
      permissions: JSON.stringify({ dashboard: true, documents: 'own' })
    }
  ]

  // Create roles
  for (const role of roles) {
    await prisma.role.upsert({
      where: { name: role.name },
      update: {},
      create: role
    })
  }

  // Create admin user
  const adminRole = await prisma.role.findUnique({ where: { name: 'admin' } })
  if (adminRole) {
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'AdminPass123', 12)
    
    await prisma.user.upsert({
      where: { email: process.env.ADMIN_EMAIL || 'admin@dataprotect.com' },
      update: {},
      create: {
        firstName: process.env.ADMIN_FIRST_NAME || 'System',
        lastName: process.env.ADMIN_LAST_NAME || 'Administrator',
        email: process.env.ADMIN_EMAIL || 'admin@dataprotect.com',
        password: hashedPassword,
        roleId: adminRole.id,
        isActive: true,
        isVerified: true
      }
    })
  }

  // Create sample projects
  const sampleProjects = [
    {
      title: 'GDPR Compliance Implementation',
      client: 'TechCorp Ltd',
      service: 'Data Protection',
      status: 'In Progress',
      priority: 'High',
      startDate: new Date('2024-01-15'),
      dueDate: new Date('2024-03-15'),
      budget: 25000,
      progress: 65,
      assignedTo: 'Sarah Johnson',
      description: 'Complete GDPR compliance implementation including policy development and staff training'
    },
    {
      title: 'E-commerce Website Development',
      client: 'Fashion Store Inc',
      service: 'Website Development',
      status: 'Planning',
      priority: 'Medium',
      startDate: new Date('2024-02-01'),
      dueDate: new Date('2024-04-01'),
      budget: 15000,
      progress: 20,
      assignedTo: 'Mike Chen',
      description: 'Full e-commerce website with payment integration and inventory management'
    }
  ]

  for (const project of sampleProjects) {
    await prisma.project.upsert({
      where: { title: project.title },
      update: {},
      create: project
    })
  }

  // Create sample service requests
  const sampleRequests = [
    {
      type: 'Website Development',
      client: 'Fashion Store Inc',
      email: 'contact@fashionstore.com',
      phone: '+1-555-0123',
      status: 'New',
      priority: 'Medium',
      budget: '$5,000 - $10,000',
      timeline: '3-4 weeks',
      description: 'Need a modern e-commerce website with payment integration and inventory management system.',
      requirements: 'Responsive design, SEO optimization, payment gateway integration, admin panel'
    },
    {
      type: 'Data Protection',
      client: 'HealthCare Plus',
      email: 'admin@healthcareplus.com',
      phone: '+1-555-0456',
      status: 'In Review',
      priority: 'High',
      budget: '$10,000 - $25,000',
      timeline: 'Within 3 months',
      description: 'GDPR compliance implementation for healthcare data processing.',
      requirements: 'GDPR audit, policy development, staff training, technical implementation'
    }
  ]

  for (const request of sampleRequests) {
    await prisma.serviceRequest.create({
      data: request
    })
  }

  console.log('Database seeded successfully with roles, admin user, projects, and service requests')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })