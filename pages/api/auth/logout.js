import { revokeSession } from '../../../lib/auth'
import { serialize, parse } from 'cookie'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const cookies = parse(req.headers.cookie || '')
    const token = cookies.token

    if (token) {
      await revokeSession(token)
    }

    // Clear cookie
    const cookie = serialize('token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0,
      path: '/'
    })

    res.setHeader('Set-Cookie', cookie)
    res.json({ success: true })
  } catch (error) {
    res.status(500).json({ error: 'Logout failed' })
  }
}