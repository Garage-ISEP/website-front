import clientPromise from '../../../lib/mongodb';

export default async (req: any, res: any) => {
  try {
    console.log('cP', clientPromise); // Add this line to check the clientPromise object

    const client = await clientPromise;
    const db = client.db('garage-web-db');

    const labs = await db.collection('partners').find({}).toArray();

    res.json(labs);
  } catch (e: any) {
    console.error('error', e);
    throw new Error(e).message;
  }
};
