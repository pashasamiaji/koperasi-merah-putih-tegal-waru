import db from './_db'
import { v4 as uuidv4 } from 'uuid'
export default async function handler(req,res){
  if (req.method === 'POST'){
    const { name, phone, message } = req.body || {}
    await db.read()
    const c = { id: uuidv4(), name, phone, message, createdAt: new Date().toISOString(), status:'open' }
    db.data.complaints.push(c)
    await db.write()
    return res.json({ message:'Keluhan terkirim' })
  }
  await db.read()
  res.json(db.data.complaints || [])
}
