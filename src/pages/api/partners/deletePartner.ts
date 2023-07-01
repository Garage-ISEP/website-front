import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async (req: any, res: any) => {
  try {
    const client = await clientPromise;
    const db = client.db('garage-web-db');
    const { id } = req.query;

    const partner = await db.collection('partners').deleteOne({
      _id: new ObjectId(id),
    });

    res.json(partner);
  } catch (e: any) {
    console.error(e);
    throw new Error(e).message;
  }
};
