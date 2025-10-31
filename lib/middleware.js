import { validateSession } from './auth'
import { parse } from 'cookie'

export const authenticate = async (req, res, next) => {
  try {
    const cookies = parse(req.headers.cookie || '')
    const token = cookies.token || req.headers.authorization?.replace('Bearer ', '')
    
    if (!token) {
      return res.status(401).json({ error: 'Authentication required' })
    }
    
    const user = await validateSession(token)
    if (!user) {
      return res.status(401).json({ error: 'Invalid or expired session' })
    }
    
    req.user = user
    if (next) next()
    return user
  } catch (error) {
    return res.status(500).json({ error: 'Authentication error' })
  }
}

export const authorize = (roles = []) => {
  return async (req, res, next) => {
    const user = await authenticate(req, res)
    if (!user) return
    
    if (roles.length && !roles.includes(user.role.name)) {
      return res.status(403).json({ error: 'Insufficient permissions' })
    }
    
    if (next) next()
  }
}

export const withAuth = (handler, options = {}) => {
  return async (req, res) => {
    if (options.roles) {
      await authorize(options.roles)(req, res)
    } else {
      await authenticate(req, res)
    }
    
    if (res.headersSent) return
    return handler(req, res)
  }
}