import Navbar from '../components/Navbar'
import useSWR from 'swr'
const fetcher = (url)=>fetch(url).then(r=>r.json())
export default function UMKM(){
  const {data} = useSWR('/api/umkm', fetcher)
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="card">
          <h2>UMKM Anggota</h2>
          {data?.length ? data.map(u=>(
            <div key={u.id} style={{borderTop:'1px solid #eee', paddingTop:10, marginTop:10}}>
              <h4>{u.name}</h4>
              <p className="small">{u.desc}</p>
              <p className="small">Kontak: {u.phone}</p>
            </div>
          )) : <p>Tidak ada UMKM terdaftar.</p>}
        </div>
      </main>
    </>
  )
}
