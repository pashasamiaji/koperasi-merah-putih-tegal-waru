import db from '../../_db'
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
  reg.status = 'declined'
  await db.write()
  res.json({ message:'Declined' })
}
