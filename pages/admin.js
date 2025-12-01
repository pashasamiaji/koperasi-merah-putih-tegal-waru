import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
export default function Admin(){
  const [regs,setRegs] = useState([])
  const [members,setMembers] = useState([])
  useEffect(()=>{ const t = localStorage.getItem('km_token'); if (!t) return; fetch('/api/admin/registrations',{ headers:{ Authorization: 'Bearer '+t } }).then(r=>r.json()).then(setRegs); fetch('/api/admin/members',{ headers:{ Authorization: 'Bearer '+t } }).then(r=>r.json()).then(setMembers) },[])
  async function approve(id){
    const t = localStorage.getItem('km_token'); await fetch('/api/admin/registrations/'+id+'/approve',{ method:'POST', headers:{ Authorization: 'Bearer '+t }}); alert('Approved — refresh'); location.reload()
  }
  async function decline(id){
    const t = localStorage.getItem('km_token'); await fetch('/api/admin/registrations/'+id+'/decline',{ method:'POST', headers:{ Authorization: 'Bearer '+t }}); alert('Declined — refresh'); location.reload()
  }
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="card">
          <h2>Admin Dashboard</h2>
          <h3>Registrations</h3>
          {regs.length===0 ? <p>No registrations</p> : regs.map(r=>(
            <div key={r.id} style={{border:'1px solid #eee',padding:10,marginTop:8}}>
              <p>{r.name} — {r.nik}</p>
              <p>Status: {r.status}</p>
              <button onClick={()=>approve(r.id)} className="btn">Approve</button>
              <button onClick={()=>decline(r.id)} style={{marginLeft:8}} className="btn">Decline</button>
            </div>
          ))}
          <h3 style={{marginTop:20}}>Members</h3>
          {members.length===0 ? <p>No members</p> : members.map(m=> <div key={m.id}><p>{m.name} — {m.email}</p></div>)}
        </div>
      </main>
    </>
  )
}
