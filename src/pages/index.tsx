import { ContactSection } from '@/components/ContactSection/ContactSection';
import { GarageSection } from '@/components/GarageSection/GarageSection';
import { GarageNumberSection } from '@/components/NumberSection/NumberSection';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import Head from 'next/head';
import { GaragePartnersSection } from '@/components/PartnersSection/PartnersSection';



export default function Home() {
  return (
    <>
      <Head>
        <title>Garage ISEP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Garage ISEP - Innovation HUB" />
      </Head>
      <>
        <HeroSection />
        <GarageSection />
        <GarageNumberSection />
        <ContactSection />
        <GaragePartnersSection />
      </>
    </>

  );
}
