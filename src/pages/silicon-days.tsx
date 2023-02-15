import { SiliconAdvantage } from '@/components/SiliconAdvantage/SiliconAdvantage';
import { SiliconShape } from '@/components/SiliconShape/SiliconShape';
import {
  SiliconAdvantageModel,
  siliconAdvantages,
} from '@/data/silicon-advantages';
import { Carousel } from 'flowbite-react';
import Head from 'next/head';
import Image from 'next/image';
import { CustomButton } from '@/components/controls/Button/CustomButton';

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
        <main
          className={
            "bg-[url('../assets/images/background-silicon1.jpg')] bg-cover"
          }
        >
          <SiliconShape name={'shape1'} left={false} valueTop={'top-[-80px]'} />
          <SiliconShape name={'shape3'} left={false} valueTop={'top-[770px]'} />
          <SiliconShape name={'shape2'} left={true} valueTop={'top-[100px]'} />
          <SiliconShape name={'shape4'} left={true} valueTop={'top-[950px]'} />

          <div className="sm:mx-4 lg:mx-20 xl:mx-10 2xl:mx-20 grid place-items-center ">
            <Image
              src={'/images/SiliconDays.png'}
              alt={''}
              width={450}
              height={450}
              className="mt-10 w-10/12 sm:w-1/4	"
            ></Image>
            <h2 className="text-center text-4xl font-bold text-white drop-shadow-lg shadow-black mt-4">
              24 mars 2023
            </h2>
            <a href="https://garageisep.com" target="_blank" rel="noreferrer">
              <Image
                src="/images/logo-h-white.png"
                alt={'Logo Garage'}
                width={250}
                height={250}
                className="flex justify-center mr-1 mt-3 mb-4"
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

            <CustomButton
              onClick={() =>
                window.open(
                  'https://form.jotform.com/230302121540333',
                  '_blank'
                )
              }
              className="bg-blue-600 py-2 px-8 mt-8 hover:bg-blue-700"
            >
              Rejoindre
            </CustomButton>
            <hr className="w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-2/5 h-px h-1 my-8 bg-white border-0 rounded md:my-12" />
            <div className="hidden sm:contents">
              {siliconAdvantages.map((o: SiliconAdvantageModel) => (
                <SiliconAdvantage
                  name={o.name}
                  description={o.description}
                  icon={o.icon}
                  alt={o.alt}
                  key={o.id}
                />
              ))}
            </div>
          </div>
          <div className="contents sm:hidden h-96 ">
            <Carousel>
              {siliconAdvantages.map((o: SiliconAdvantageModel) => (
                <SiliconAdvantage
                  name={o.name}
                  description={o.description}
                  icon={o.icon}
                  alt={o.alt}
                  key={o.id}
                />
              ))}
            </Carousel>
          </div>
          <div className="grid place-items-center">
            <h2 className="mt-6 sm:mt-0 text-center text-4xl font-bold text-white drop-shadow-lg shadow-black">
              Questions ?
            </h2>
            <CustomButton
              className="bg-blue-600 hover:bg-blue-700 px-10 mt-5"
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
            </CustomButton>
            <hr className="w-4/5 xl:w-1/2 2xl:w-2/5 h-px h-1 my-8 bg-white border-0 rounded md:my-12" />
            <p className="text-center font-bold text-gray-700 text-lg w-10/12 mb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s.
            </p>
          </div>
        </main>
      </>
    </>
  );
};

export default SiliconDays;
