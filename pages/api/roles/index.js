import { RoleService } from '../../../services/roleService'
import { withAuth } from '../../../lib/middleware'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Public endpoint for signup form
    try {
      const roles = await RoleService.getAllRoles()
      res.json({ roles })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
  else if (req.method === 'POST') {
    // Protected endpoint for creating roles
    return withAuth(async (req, res) => {
      try {
        const role = await RoleService.createRole(req.body)
        res.status(201).json({ role })
      } catch (error) {
        res.status(400).json({ error: error.message })
      }
    }, { roles: ['admin'] })(req, res)
  }
  else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}