import { UserService } from '../../../services/userService'
import { withAuth } from '../../../lib/middleware'

export default withAuth(async (req, res) => {
  const { id } = req.query

  if (req.method === 'GET') {
    try {
      const user = await UserService.getUserById(id)
      if (!user) {
        return res.status(404).json({ error: 'User not found' })
      }
      res.json({ user })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  } 
  else if (req.method === 'PUT') {
    try {
      const user = await UserService.updateUser(id, req.body)
      res.json({ user })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
  else if (req.method === 'DELETE') {
    try {
      const user = await UserService.deactivateUser(id)
      res.json({ user })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
  else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}, { roles: ['admin', 'consultant'] })