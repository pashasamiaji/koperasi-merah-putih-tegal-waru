import db from '../_db'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const SECRET = process.env.JWT_SECRET || 'dev_secret'
export default async function handler(req, res){
  if (req.method !== 'POST') return res.status(405).end()
  const { email, password } = req.body || {}
  await db.read()
  const user = db.data.users.find(u => u.email === email)
  if (!user) return res.status(401).json({ message:'User tidak ditemukan' })
  const ok = bcrypt.compareSync(password, user.passwordHash || '')
  if (!ok) return res.status(401).json({ message:'Password salah' })
  if (!user.approved) return res.status(403).json({ message:'Akun belum disetujui' })
  const token = jwt.sign({ id:user.id, role:user.role, name:user.name, email:user.email }, SECRET, { expiresIn:'12h' })
  res.json({ token })
}
