let users = global.__USERS = global.__USERS || []

export default function handler(req, res) {
  const s = global.__SESSION || null
  if (!s) {
    res.json({ user: null })
  } else {
    const u = users.find(x => x.id === s.userId)
    res.json({ user: u ? { id: u.id, name: u.name, email: u.email } : null })
  }
}
