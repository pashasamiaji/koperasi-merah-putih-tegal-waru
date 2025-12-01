import Navbar from '../components/Navbar'
import useSWR from 'swr'
const fetcher = (url)=>fetch(url).then(r=>r.json())
export default function Articles(){
  const {data} = useSWR('/api/articles', fetcher)
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="card">
          <h2>Literasi Keuangan</h2>
          {data?.length ? data.map(a=>(
            <div key={a.id} style={{marginTop:12}}>
              <h3>{a.title}</h3>
              <p className="small">{a.excerpt}</p>
            </div>
          )) : <p>Loading...</p>}
        </div>
      </main>
    </>
  )
}
