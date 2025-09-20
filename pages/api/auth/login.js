
let users = global.__USERS = global.__USERS || [];

export default function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({error:'Method not allowed'})
  const { email, password } = req.body
  const u = users.find(x=>x.email===email && x.password===password)
  if(!u) return res.status(401).json({error:'Invalid credentials'})
  global.__SESSION = { userId: u.id }
  return res.json({ok:true, user: { id: u.id, email: u.email, name: u.name }})
}
