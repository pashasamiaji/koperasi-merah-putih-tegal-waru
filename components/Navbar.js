import Link from 'next/link'
export default function Navbar(){
  return (
    <nav className="nav">
      <div className="nav-left">
        <div className="logo">KM</div>
        <div className="brand">
          <Link href="/"><a className="brand-title">Koperasi Merah Putih</a></Link>
          <div className="brand-sub">Desa Tegal Waru</div>
        </div>
      </div>
      <div className="nav-right">
        <Link href="/">Home</Link>
        <Link href="/profile">Profil</Link>
        <Link href="/register">Daftar</Link>
        <Link href="/login">Login</Link>
        <Link href="/articles">Literasi</Link>
        <Link href="/umkm">UMKM</Link>
      </div>
    </nav>
  )
}
