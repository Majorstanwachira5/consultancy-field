
import Layout from '../components/Layout'
import { useEffect, useState } from 'react'

export default function Dashboard(){
  const [user, setUser] = useState(null)
  const [media, setMedia] = useState([])
  useEffect(()=>{
    // mock: fetch user from local API endpoint (in demo it's memory-based)
    fetch('/api/auth/me').then(r=>r.json()).then(j=>setUser(j.user||null))
    // mock media
    setMedia([
      {id:'m1', name:'contract.pdf', tag:'PII', size:200},
      {id:'m2', name:'training-slide.jpg', tag:'marketing', size:150}
    ])
  },[])

  return (
    <Layout>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 bg-white rounded p-4 shadow">
          <h3 className="font-semibold text-lg">Welcome{user ? ' — '+user.name : ''}</h3>
          <p className="text-sm text-slate-600">This is your user portal. Upload files, view policies, request consultancy.</p>

          <div className="mt-4">
            <h4 className="font-medium">Media Library</h4>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {media.map(m => (
                <div key={m.id} className="border rounded p-2 bg-slate-50">
                  <div className="font-medium">{m.name}</div>
                  <div className="text-xs text-slate-500">{m.tag} • {m.size} KB</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <aside className="bg-white rounded p-4 shadow">
          <h4 className="font-semibold">Quick actions</h4>
          <ul className="space-y-2 text-sm mt-2">
            <li><a href="#" className="text-primary">Request DPIA</a></li>
            <li><a href="#" className="text-primary">Download policy pack</a></li>
            <li><a href="#" className="text-primary">Book a workshop</a></li>
          </ul>
        </aside>
      </div>
    </Layout>
  )
}
