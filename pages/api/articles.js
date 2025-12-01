import db from './_db'
export default async function handler(req,res){
  await db.read()
  res.json(db.data.articles || [])
}
