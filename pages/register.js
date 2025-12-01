import Navbar from '../components/Navbar'
import { useState } from 'react'
export default function Register(){
  const [form,setForm] = useState({name:'',nik:'',address:'',phone:'',email:''})
  const [ktp,setKtp] = useState(null)
  async function submit(e){
    e.preventDefault()
    const fd = new FormData()
    Object.entries(form).forEach(([k,v])=>fd.append(k,v))
    if (ktp) fd.append('ktp', ktp)
    const res = await fetch('/api/auth/register', { method:'POST', body: fd })
    const body = await res.json()
    alert(body.message || 'Terkirim')
    setForm({name:'',nik:'',address:'',phone:'',email:''})
    setKtp(null)
  }
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="card">
          <h2>Pendaftaran Anggota</h2>
          <form className="form" onSubmit={submit}>
            <input required placeholder="Nama" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
            <input required placeholder="NIK" value={form.nik} onChange={e=>setForm({...form,nik:e.target.value})} />
            <input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
            <input placeholder="No HP" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} />
            <textarea placeholder="Alamat" value={form.address} onChange={e=>setForm({...form,address:e.target.value})} />
            <label className="small">Unggah Foto KTP (opsional)</label>
            <input type="file" accept="image/*" onChange={e=>setKtp(e.target.files[0])} />
            <div><button className="btn" type="submit">Kirim Pendaftaran</button></div>
          </form>
        </div>
      </main>
    </>
  )
}
