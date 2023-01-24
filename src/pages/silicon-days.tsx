import { SiliconAdvantage } from '@/components/SiliconAdvantage/SiliconAdvantage'
import {
  SiliconAdvantageModel,
  siliconAdvantages,
} from '@/data/silicon-advantages'
import dynamic from 'next/dynamic'
import Head from 'next/head'

const Image = dynamic(() => import('next/image'), { ssr: false })

const SiliconDays = () => {
  return (
    <>
      <Head>
        <title>SiliconDays</title>
        <meta
          name="description"
          content="Silicon Days - Garage ISEP, hackathon étudiant"
        />
      </Head>
      <>
        <div className="pt-12  bg-gradient-to-b from-pink-400 to-pink-300">
          <div className=" sm:mx-4 lg:mx-6 xl:mx-8 grid place-items-center ">
            <h1 className="text-center text-6xl text-white font-bold mb-5">
              SiliconDays
            </h1>
            <h2 className="text-center text-4xl font-bold text-white drop-shadow-lg shadow-black">
              24 mars 2023
            </h2>
            <Image
              src="/images/logo-h-white.png"
              alt={'Logo Garage'}
              width={250}
              height={250}
              className="flex justify-center mr-3 mt-3 mb-4"
            ></Image>
            <h2 className=" text-center text-4xl font-bold text-white drop-shadow-lg shadow-black mb-3">
              Allons chercher l&apos;innovation
            </h2>
            <p className="text-center font-bold text-white text-xl w-10/12 sm:w-4/5 xl:w-1/2">
              Rejoignez-nous pour un hackathon d&apos;un mois où vous pourrez
              développer de nouvelles idées en compagnie de développeurs, de
              designers et d&apos;autres professionnels de la technologie.
            </p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 mt-5 rounded"
              onClick={() => window.open('https://garageisep.com', '_blank')}
            >
              Rejoindre
            </button>
            <hr className="w-4/5 xl:w-1/2 h-px h-1 my-8 bg-white border-0 rounded md:my-12" />
            {siliconAdvantages.map((o: SiliconAdvantageModel) => (
              // eslint-disable-next-line react/jsx-key
              <SiliconAdvantage
                name={o.name}
                description={o.description}
                icon={o.icon}
                alt={o.alt}
              />
            ))}
            <h2 className="text-center text-4xl font-bold text-white drop-shadow-lg shadow-black">
              Questions ?
            </h2>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-0 px-10 mt-5 rounded"
              onClick={() =>
                (window.location.href = 'mailto:bureau@garageisep.com')
              }
            >
              <div className="flex items-center">
                <Image
                  src="/images/logo-white.png"
                  alt="logo Garage ISEP"
                  width={50}
                  height={50}
                ></Image>
                <p> Contactez-nous</p>
              </div>
            </button>
            <hr className="w-4/5 xl:w-1/2 h-px h-1 my-8 bg-white border-0 rounded md:my-10" />
            <p className="text-center font-bold text-white text-lg w-10/12 mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s.
            </p>
          </div>
        </div>
      </>
    </>
  )
}

export default SiliconDays