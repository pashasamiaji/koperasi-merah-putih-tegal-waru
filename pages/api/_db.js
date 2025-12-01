import { Low, JSONFile } from 'lowdb'
import { join } from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
const __dirname = process.cwd()
const file = join(__dirname, 'data', 'db.json')
fs.mkdirSync(join(__dirname,'data'), { recursive: true })
const adapter = new JSONFile(file)
const db = new Low(adapter)
// ensure default data
await db.read()
db.data = db.data || { users:[], registrations:[], loans:[], payments:[], umkm:[], articles:[], complaints:[] }
if (!db.data.users.find(u=>u.email==='admin@koperasi.test')){
  db.data.users.push({ id:'admin-1', name:'Admin', email:'admin@koperasi.test', passwordHash:'$2a$08$Kp6v3e2a9j1K8Z0dQw1i0O', role:'admin', approved:true })
  // passwordHash is bcrypt hash for 'admin123' (demo)
}
if (!db.data.articles || db.data.articles.length===0){
  db.data.articles = [
    { id:'a1', title:'Mengelola Keuangan Keluarga Sederhana', excerpt:'Tips praktis menyusun anggaran rumah tangga.'},
    { id:'a2', title:'Cara Pinjam yang Sehat', excerpt:'Panduan mengajukan pinjaman secara bijak.'},
    { id:'a3', title:'Mencegah Kredit Macet', excerpt:'Langkah proaktif agar cicilan tidak menunggak.'}
  ]
}
await db.write()
export default db
