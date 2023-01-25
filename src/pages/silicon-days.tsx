import { SiliconAdvantage } from '@/components/SiliconAdvantage/SiliconAdvantage';
import { SiliconShape } from '@/components/SiliconShape/SiliconShape';
import {
  SiliconAdvantageModel,
  siliconAdvantages,
} from '@/data/silicon-advantages';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const Image = dynamic(() => import('next/image'), { ssr: false });

const SiliconDays = () => {
  const [background, setBackground] = useState(1);

  const changeBackground = () => {
    if (background === 4) setBackground(1);
    else setBackground(background + 1);
    background === 4 ? setBackground(1) : setBackground(background + 1);
  };

  useEffect(() => {
    console.log(background);
  });
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
        <main className="pt-12 bg-[url('../assets/images/background-silicon1.jpg')] bg-auto bg-no-repeat bg-center">
          <SiliconShape name={'shape1'} left={false} valueTop={'top-[-80px]'} />
          <SiliconShape name={'shape3'} left={false} valueTop={'top-[770px]'} />
          <SiliconShape name={'shape2'} left={true} valueTop={'top-[100px]'} />
          <SiliconShape name={'shape4'} left={true} valueTop={'top-[950px]'} />

          <div className="sm:mx-4 lg:mx-20 xl:mx-10 2xl:mx-20 grid place-items-center z-[200000]">
            <h1 className="text-center text-6xl text-white font-bold mb-5">
              SiliconDays
            </h1>
            <h2 className="text-center text-4xl font-bold text-white drop-shadow-lg shadow-black">
              24 mars 2023
            </h2>
            <a href="https://garageisep.com" target="_blank" rel="noreferrer">
              <Image
                src="/images/logo-h-white.png"
                alt={'Logo Garage'}
                width={250}
                height={250}
                className="flex justify-center mr-3 mt-3 mb-4"
              ></Image>
            </a>
            <h2 className=" text-center text-4xl font-bold text-white drop-shadow-lg shadow-black mb-3">
              Allons chercher l&apos;innovation
            </h2>
            <p className="text-center font-bold text-white text-xl w-10/12 sm:w-4/5 xl:w-2/5">
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
            <hr className="w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-2/5 h-px h-1 my-8 bg-white border-0 rounded md:my-12" />
            {siliconAdvantages.map((o: SiliconAdvantageModel) => (
              // eslint-disable-next-line react/jsx-key
              <SiliconAdvantage
                name={o.name}
                description={o.description}
                icon={o.icon}
                alt={o.alt}
                key={o.id}
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
            <hr className="w-4/5 xl:w-1/2 2xl:w-2/5 h-px h-1 my-8 bg-white border-0 rounded md:my-12" />
            <p className="text-center font-bold text-gray-700 text-lg w-10/12 mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s.
            </p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 mt-5 rounded mb-5"
              onClick={() => changeBackground()}
            >
              Change background
            </button>
          </div>
          <div className="w-full">zfze</div>
        </main>
      </>
    </>
  );
};

export default SiliconDays;
