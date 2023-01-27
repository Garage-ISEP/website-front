import { GarageSection } from '@/components/GarageSection/GarageSection'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Garage ISEP</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Garage-logo.svg" />
      </Head>
      <GarageSection />
    </>
  )
}
