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
      let newPost = await db.collection("user").insertOne(bodyObject);
      res.json(newPost);
      break;
    case "GET":
      const posts = await db.collection("user").find({}).toArray();
      res.json({ status: 200, data: posts });
      break;
  }

}
