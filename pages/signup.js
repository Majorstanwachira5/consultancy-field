
import { useState } from 'react'
import Layout from '../components/Layout'
import Router from 'next/router'

export default function Signup(){
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [pw, setPw] = useState('')
  const [msg, setMsg] = useState('')

  async function onSubmit(e){
    e.preventDefault()
    const res = await fetch('/api/auth/signup', { method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email,name,password:pw}) })
    const data = await res.json()
    if(data.ok) { Router.push('/dashboard') }
    else setMsg(data.error||'Signup failed')
  }

  return (
    <Layout>
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-2">Create your account</h2>
        <form onSubmit={onSubmit} className="space-y-3">
          <input required value={name} onChange={(e)=>setName(e.target.value)} placeholder="Full name" className="w-full border px-3 py-2 rounded"/>
          <input required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" type="email" className="w-full border px-3 py-2 rounded"/>
          <input required value={pw} onChange={(e)=>setPw(e.target.value)} placeholder="Password" type="password" className="w-full border px-3 py-2 rounded"/>
          <div className="flex items-center justify-between">
            <button className="bg-primary text-white px-4 py-2 rounded">Create account</button>
            <a href="/login" className="text-sm text-slate-600">Already have an account?</a>
          </div>
          {msg && <div className="text-sm text-rose-600">{msg}</div>}
        </form>
      </div>
    </Layout>
  )
}
