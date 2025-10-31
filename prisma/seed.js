const { PrismaClient } = require('@prisma/client')
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

  for (const role of roles) {
    await prisma.role.upsert({
      where: { name: role.name },
      update: {},
      create: role
    })
  }

  console.log('Database seeded successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })