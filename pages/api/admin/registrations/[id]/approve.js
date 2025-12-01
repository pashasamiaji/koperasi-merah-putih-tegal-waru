import db from '../../_db'
import { v4 as uuidv4 } from 'uuid'
import jwt from 'jsonwebtoken'
const SECRET = process.env.JWT_SECRET || 'dev_secret'
function auth(req){
  const h = req.headers.authorization
  if (!h) return null
  try { const t = h.replace('Bearer ',''); return jwt.verify(t, SECRET) } catch(e){ return null }
}
export default async function handler(req,res){
  if (req.method !== 'POST') return res.status(405).end()
  const user = auth(req); if (!user || user.role!=='admin') return res.status(403).json({ message:'Forbidden' })
  const { id } = req.query
  await db.read()
  const reg = db.data.registrations.find(r=>r.id===id)
  if (!reg) return res.status(404).json({ message:'Not found' })
  reg.status = 'approved'
  const hashed = require('bcryptjs').hashSync('member123',8)
  const newUser = { id: uuidv4(), name: reg.name, email: reg.email || `${reg.nik}@koperasi.local`, passwordHash: hashed, role:'member', approved:true, nik:reg.nik, address:reg.address, phone:reg.phone }
  db.data.users.push(newUser)
  await db.write()
  res.json({ message:'Approved', user:newUser, defaultPassword:'member123' })
}
