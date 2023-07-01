import clientPromise from '../../../lib/mongodb';

export default async (req: any, res: any) => {
  try {
    const client = await clientPromise;
    const db = client.db('garage-web-db');
    const { name, description, image } = req.body;

    const lab = await db.collection('labs').insertOne({
      name,
      description,
      image,
    });

    res.json(lab);
  } catch (e: any) {
    console.error(e);
    throw new Error(e).message;
  }
};
