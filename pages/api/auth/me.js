import { withAuth } from '../../../lib/middleware'

export default withAuth(async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  res.json({ user: req.user })
})
