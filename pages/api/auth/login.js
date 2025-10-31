import { UserService } from '../../../services/userService'
import { serialize } from 'cookie'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const result = await UserService.authenticateUser(req.body)
    
    // Set HTTP-only cookie
    const cookie = serialize('token', result.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: '/'
    })
    
    res.setHeader('Set-Cookie', cookie)
    res.json({ success: true, user: result.user })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
