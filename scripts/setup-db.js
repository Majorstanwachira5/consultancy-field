const { execSync } = require('child_process')

console.log('🚀 Setting up database...')

try {
  // Generate Prisma client
  console.log('📦 Generating Prisma client...')
  execSync('npx prisma generate', { stdio: 'inherit' })

  // Push database schema
  console.log('🗄️  Pushing database schema...')
  execSync('npx prisma db push', { stdio: 'inherit' })

  // Seed database
  console.log('🌱 Seeding database...')
  execSync('node prisma/seed.js', { stdio: 'inherit' })

  console.log('✅ Database setup complete!')
  console.log('\n📋 Default roles created:')
  console.log('   - admin: Full system access')
  console.log('   - consultant: Senior consultant with client management')
  console.log('   - analyst: Data protection analyst')
  console.log('   - client: Client user with limited access')
  
} catch (error) {
  console.error('❌ Database setup failed:', error.message)
  process.exit(1)
}