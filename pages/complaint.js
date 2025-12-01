import Navbar from '../components/Navbar'
import { useState } from 'react'
export default function Complaint(){
  const [f,setF] = useState({name:'',phone:'',message:''})
  async function submit(e){
    e.preventDefault()
    const res = await fetch('/api/complaints',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(f)})
    const b = await res.json()
    alert(b.message || 'Terkirim')
    setF({name:'',phone:'',message:''})
  }
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="card">
          <h2>Pengaduan / Feedback</h2>
          <form className="form" onSubmit={submit}>
            <input placeholder="Nama" value={f.name} onChange={e=>setF({...f,name:e.target.value})} />
            <input placeholder="No HP" value={f.phone} onChange={e=>setF({...f,phone:e.target.value})} />
            <textarea placeholder="Keluhan" value={f.message} onChange={e=>setF({...f,message:e.target.value})} />
            <div><button className="btn" type="submit">Kirim Keluhan</button></div>
          </form>
        </div>
      </main>
    </>
  )
}
