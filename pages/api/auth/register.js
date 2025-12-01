import db from '../_db'
import { v4 as uuidv4 } from 'uuid'
export default async function handler(req, res){
  if (req.method !== 'POST') return res.status(405).end()
  // Simple multipart handling via next's default won't parse files; for demo we accept form fields only
  const { name, nik, address, phone, email } = req.body || {}
  const id = uuidv4()
  await db.read()
  db.data.registrations.push({ id, name, nik, address, phone, email, status:'pending', createdAt: new Date().toISOString() })
  await db.write()
  res.json({ message:'Registrasi terkirim. Menunggu persetujuan admin.' })
}
