import Navbar from '../components/Navbar'
export default function Profile(){
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="card">
          <h2>Profil Koperasi</h2>
          <h3>Sejarah</h3>
          <p>Koperasi ini didirikan oleh warga Desa Tegal Waru pada tahun 2010 untuk meningkatkan kesejahteraan bersama.</p>
          <h3>Visi</h3>
          <p>Menjadi koperasi terdepan dalam pemberdayaan ekonomi lokal.</p>
          <h3>Misi</h3>
          <ul>
            <li>Meningkatkan akses modal bagi UMKM anggota</li>
            <li>Mengedukasi literasi keuangan</li>
            <li>Membangun sinergi ekonomi desa</li>
          </ul>
          <h3>Struktur Organisasi (Dummy)</h3>
          <ul>
            <li>Ketua: Sdr. Budi</li>
            <li>Sekretaris: Sdr. Ani</li>
            <li>Bendahara: Sdr. Tono</li>
          </ul>
        </div>
      </main>
    </>
  )
}
