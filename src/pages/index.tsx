import { ContactSection } from '@/components/ContactSection/ContactSection';
import { GarageSection } from '@/components/GarageSection/GarageSection';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Garage ISEP</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Garage ISEP - Inovation HUB" />
      </Head>
      <HeroSection />
      <GarageSection />
      <ContactSection />
    </>
  );
}
