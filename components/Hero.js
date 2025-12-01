import Link from 'next/link'
export default function Hero(){
  return (
    <section className="hero">
      <div>
        <h1>Koperasi Merah Putih</h1>
        <p>Digitalisasi layanan koperasi untuk anggota Desa Tegal Waru. Daftar anggota, ajukan pinjaman, dan kelola UMKM secara mudah.</p>
        <div className="cta">
          <Link href="/register"><a className="btn">Daftar Anggota</a></Link>
          <Link href="/loan"><a className="btn-outline">Ajukan Pinjaman</a></Link>
        </div>
      </div>
      <div className="hero-card">
        <h4>Pengumuman penting</h4>
        <p>Rapat anggota tahunan: Sabtu, 20 Desember 2025 — Balai Desa.</p>
      </div>
    </section>
  )
}
