import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
export default function Home(){
  return (
    <>
      <Navbar />
      <main className="container">
        <Hero />
        <section className="card">
          <h3>Profil Singkat</h3>
          <p>Koperasi Merah Putih berdiri tahun 2010 untuk memberdayakan ekonomi warga Desa Tegal Waru.</p>
        </section>

        <section className="card">
          <h3>Fitur</h3>
          <ul>
            <li>Daftar anggota online</li>
            <li>Pengajuan pinjaman & simulasi</li>
            <li>Dashboard anggota & admin</li>
            <li>Daftar UMKM anggota</li>
            <li>Literasi keuangan</li>
          </ul>
        </section>

        <section className="card">
          <h3>Kontak & Lokasi</h3>
          <p>Alamat: Balai Desa Tegal Waru. Email: admin@koperasi.test</p>
        </section>

        <section className="card">
          <h3>Artikel Terbaru</h3>
          <p>Simulasi & tips keuangan — lihat halaman Literasi.</p>
        </section>

        <div className="footer">© {new Date().getFullYear()} Koperasi Merah Putih</div>
      </main>
    </>
  )
}
