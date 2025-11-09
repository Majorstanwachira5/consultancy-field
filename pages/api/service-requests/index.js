import { DatabaseService } from '../../../lib/database'
import { withAuth } from '../../../lib/middleware'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Protected endpoint for admin/consultant
    return withAuth(async (req, res) => {
      try {
        const { status, service, priority } = req.query
        const filters = { status, service, priority }
        const requests = await DatabaseService.getAllServiceRequests(filters)
        res.json({ requests })
      } catch (error) {
        res.status(500).json({ error: error.message })
      }
    }, { roles: ['admin', 'consultant'] })(req, res)
  }
  else if (req.method === 'POST') {
    // Public endpoint for service requests
    try {
      const request = await DatabaseService.createServiceRequest(req.body)
      res.status(201).json({ request })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
  else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}