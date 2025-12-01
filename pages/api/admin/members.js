import db from '../_db'
import jwt from 'jsonwebtoken'
const SECRET = process.env.JWT_SECRET || 'dev_secret'
function auth(req){
  const h = req.headers.authorization
  if (!h) return null
  try { const t = h.replace('Bearer ',''); return jwt.verify(t, SECRET) } catch(e){ return null }
}
export default async function handler(req,res){
  const user = auth(req); if (!user || user.role!=='admin') return res.status(403).json({ message:'Forbidden' })
  await db.read()
  res.json(db.data.users.filter(u=>u.role==='member'))
}
