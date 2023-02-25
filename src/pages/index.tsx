import { ContactSection } from '@/components/ContactSection/ContactSection';
import { GarageSection } from '@/components/GarageSection/GarageSection';
import { GarageNumberSection } from '@/components/NumberSection/NumberSection';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Garage ISEP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-gray-100">
        <GarageSection />
        <GarageNumberSection />
        <ContactSection />
      </div>
    </>
  );
}
