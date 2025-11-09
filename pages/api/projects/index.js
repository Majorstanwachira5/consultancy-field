import { DatabaseService } from '../../../lib/database'
import { withAuth } from '../../../lib/middleware'

export default withAuth(async (req, res) => {
  if (req.method === 'GET') {
    try {
      const { status, service, search } = req.query
      const filters = { status, service, search }
      const projects = await DatabaseService.getAllProjects(filters)
      res.json({ projects })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
  else if (req.method === 'POST') {
    try {
      const project = await DatabaseService.createProject(req.body)
      res.status(201).json({ project })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
  else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}, { roles: ['admin', 'consultant'] })