import { UserService } from '../../../services/userService'
import { withAuth } from '../../../lib/middleware'

export default withAuth(async (req, res) => {
  if (req.method === 'GET') {
    try {
      const { roleId, isActive, search } = req.query
      const filters = {}
      
      if (roleId) filters.roleId = roleId
      if (isActive !== undefined) filters.isActive = isActive === 'true'
      if (search) filters.search = search

      const users = await UserService.getAllUsers(filters)
      res.json({ users })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}, { roles: ['admin', 'consultant'] })