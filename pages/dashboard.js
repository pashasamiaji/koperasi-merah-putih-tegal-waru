import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
export default function Dashboard(){
  const [me, setMe] = useState(null)
  useEffect(()=>{ const t = localStorage.getItem('km_token'); if (!t) return; fetch('/api/member/me', { headers:{ Authorization: 'Bearer '+t } }).then(r=>r.json()).then(setMe) },[])
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="card">
          <h2>Dashboard Anggota</h2>
          {me ? (
            <div>
              <h3>Data Diri</h3>
              <p>Nama: {me.user.name}</p>
              <p>NIK: {me.user.nik || '-'}</p>
              <p>Saldo Simpanan: Rp {me.balance?.toLocaleString()}</p>
              <h3>Pinjaman</h3>
              <ul>{me.loans.length===0 ? <li>Tidak ada pinjaman aktif</li> : me.loans.map(l=> <li key={l.id}>{l.amount} — status: {l.status}</li>)}</ul>
              <h3>Notifikasi</h3>
              <p className="small">Tidak ada notifikasi jatuh tempo saat ini (demo).</p>
            </div>
          ) : <p>Silakan login terlebih dulu.</p>}
        </div>
      </main>
    </>
  )
}
