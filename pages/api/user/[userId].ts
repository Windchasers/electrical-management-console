// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from "../../../lib/mongodb";

const { ObjectId } = require('mongodb');

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  let { db } = await connectToDatabase();

  switch (req.method) {
    case "GET":   
      const query = req.query.userId
      // console.log('Id',query)
      const posts = await db.collection("user").findOne({_id:new ObjectId(query)});
      res.json({ status: 200, data: posts });
      break;
    case "DELETE":
      const dquery = req.query.userId
      console.log('DelId',dquery)
      const ans = await db.collection("user").deleteOne({_id:new ObjectId(dquery)});
      res.json({ status: 200, data: ans });
      break;
  }

}
