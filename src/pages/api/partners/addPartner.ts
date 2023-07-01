import clientPromise from '../../../lib/mongodb';

export default async (req: any, res: any) => {
  try {
    const client = await clientPromise;
    const db = client.db('garage-web-db');
    const { image, alt } = req.body;

    const partner = await db.collection('partners').insertOne({
      image,
      alt,
    });

    res.json(partner);
  } catch (e: any) {
    console.error(e);
    throw new Error(e).message;
  }
};
