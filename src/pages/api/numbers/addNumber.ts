import clientPromise from '../../../lib/mongodb';

export default async (req: any, res: any) => {
  try {
    const client = await clientPromise;
    const db = client.db('garage-web-db');
    const { value, name, description } = req.body;

    const number = await db.collection('numbergarages').insertOne({
      value,
      name,
      description,
    });

    res.json(number);
  } catch (e: any) {
    console.error(e);
    throw new Error(e).message;
  }
};
