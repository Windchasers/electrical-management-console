// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from "../../lib/mongodb";

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  let { db } = await connectToDatabase();

  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      let findRes = await db.collection("trade-calendar").find({key:bodyObject.key}).toArray();
      let newPost
    //   newPost = await db.collection("trade-calendar").insertOne(bodyObject);
      if(findRes.length>0){
        
        newPost = await db.collection("trade-calendar").updateOne({key:bodyObject.key},{$set:bodyObject});
      }else{
        newPost = await db.collection("trade-calendar").insertOne(bodyObject);
      }
      res.json({ status: 200, data: newPost });
      break;
    case "GET":
      const posts = await db.collection("trade-calendar").find({}).toArray();
      res.json({ status: 200, data: posts });
      break;
  }

}
