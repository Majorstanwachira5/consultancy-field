import { UserService } from '../../../services/userService'
import { withAuth } from '../../../lib/middleware'

export default withAuth(async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const result = await UserService.changePassword(req.user.id, req.body)
    res.json(result)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})