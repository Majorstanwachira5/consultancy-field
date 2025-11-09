import { DatabaseService } from '../../../lib/database'
import { withAuth } from '../../../lib/middleware'

export default withAuth(async (req, res) => {
  if (req.method === 'GET') {
    try {
      const stats = await DatabaseService.getDashboardStats()
      res.json({ stats })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
  else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}, { roles: ['admin'] })