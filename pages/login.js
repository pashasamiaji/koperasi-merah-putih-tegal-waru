import Navbar from '../components/Navbar'
import { useState } from 'react'
export default function Login(){
  const [f,setF] = useState({email:'',password:''})
  async function submit(e){
    e.preventDefault()
    const res = await fetch('/api/auth/login', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(f) })
    const body = await res.json()
    if (body.token){ localStorage.setItem('km_token', body.token); alert('Login sukses'); window.location.href='/dashboard' }
    else alert(body.message || 'Gagal')
  }
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="card">
          <h2>Login</h2>
          <form className="form" onSubmit={submit}>
            <input placeholder="Email" value={f.email} onChange={e=>setF({...f,email:e.target.value})} />
            <input type="password" placeholder="Password" value={f.password} onChange={e=>setF({...f,password:e.target.value})} />
            <div><button className="btn" type="submit">Login</button></div>
            <p className="small">Default admin: admin@koperasi.test / admin123</p>
          </form>
        </div>
      </main>
    </>
  )
}
