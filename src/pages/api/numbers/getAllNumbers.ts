import clientPromise from '../../../lib/mongodb';

export default async (req: any, res: any) => {
  try {
    console.log('cP', clientPromise); // Add this line to check the clientPromise object

    const client = await clientPromise;
    const db = client.db('garage-web-db');

    const numbers = await db.collection('numbergarages').find({}).toArray();

    res.json(numbers);
  } catch (e: any) {
    console.error('error', e);
    throw new Error(e).message;
  }
};
