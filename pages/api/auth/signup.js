
let users = global.__USERS = global.__USERS || [];

export default function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({error:'Method not allowed'})
  const { email, name, password } = req.body
  if(!email || !password) return res.status(400).json({error:'Missing fields'})
  if(users.find(u=>u.email===email)) return res.status(400).json({error:'User exists'})
  const u = { id: 'u-'+(users.length+1), email, name: name||email.split('@')[0], password }
  users.push(u)
  // create a fake session (cookie-free demo)
  global.__SESSION = { userId: u.id }
  return res.json({ok:true, user: { id: u.id, email: u.email, name: u.name }})
}
