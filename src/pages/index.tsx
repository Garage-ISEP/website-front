import { ContactSection } from '@/components/ContactSection/ContactSection';
import { GarageSection } from '@/components/GarageSection/GarageSection';
import { GarageNumberSection } from '@/components/NumberSection/NumberSection';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import Head from 'next/head';
import { GaragePartnersSection } from '@/components/PartnersSection/PartnersSection';

interface Props {
  labs: any;
  partners: any;
  numbers: any;
}

export default function Home({ labs, partners, numbers }: Props) {
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

export async function getServerSideProps() {
  try {
    let responseLabs = await fetch(
      (process.env.API_URL || 'https://garageisep.com/') +
        '/api/labs/getAllLabs'
    );
    let labs = await responseLabs.json();
    let responsePartners = await fetch(
      (process.env.API_URL || 'https://garageisep.com/') +
        '/api/partners/getAllPartners'
    );
    let partners = await responsePartners.json();
    let responseNumbers = await fetch(
      (process.env.API_URL || 'https://garageisep.com/') +
        '/api/numbers/getAllNumbers'
    );
    let numbers = await responseNumbers.json();
    return {
      props: {
        labs: JSON.parse(JSON.stringify(labs)),
        partners: JSON.parse(JSON.stringify(partners)),
        numbers: JSON.parse(JSON.stringify(numbers)),
      },
    };
  } catch (e) {
    console.log(e);
    return { props: e };
  }
}
