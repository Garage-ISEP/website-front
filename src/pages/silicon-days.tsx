import { SiliconAdvantage } from '@/components/SiliconSubThemes/SiliconSubThemes';
import { SiliconShape } from '@/components/SiliconShape/SiliconShape';
import {
  SiliconSubThemesModel,
  siliconSubThemes,
} from '@/data/silicon-subthemes';
import { SiliconCalendarModel, siliconCalendar } from '@/data/calendar-silicon';
import Head from 'next/head';
import Image from 'next/image';
import { CustomButton } from '@/components/controls/Button/CustomButton';
import { SiliconCalendar } from '@/components/SiliconCalendar/SiliconCalendar';
import { Header } from '@/components/Header/header';
import { useEffect, useState } from 'react';
import { ApparitionAnimation } from '@/components/Animations/ApparitionAnimation/ApparitionAnimation';

const SiliconDays = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (/Android|iPhone/i.test(navigator.userAgent)) {
      setIsMobile(true);
    } else setIsMobile(false);
  }, []);
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
          {/*           <SiliconShape name={'shape4'} left={true} valueTop={'top-[950px]'} />
           */}
          <div className="sm:mx-4 lg:mx-20 xl:mx-10 2xl:mx-20 grid place-items-center ">
            <Header
              logo={'/g-logo-h-w.svg'}
              pushedEvent={"L'association"}
              className="mt-3 sm:mt-5 w-10/12"
              logoMobile={'/images/logo-white.png'}
              linkPushed={'/#GarageISEP'}
            />
            <ApparitionAnimation classNames="grid place-items-center">
              <Image
                src={'/images/SiliconDays.png'}
                alt={''}
                width={450}
                height={450}
                className="mt-4 sm:mt- w-8/12 sm:w-1/4	"
              ></Image>
              <h2 className="text-center text-2xl sm:text-3xl font-bold text-white drop-shadow-lg shadow-black mt-4">
                Du 11 au 28 mars 2024
              </h2>
              <a href="https://garageisep.com" target="_blank" rel="noreferrer">
                <Image
                  src="/images/logo-h-white.png"
                  alt={'Logo Garage'}
                  width={isMobile ? 220 : 240}
                  height={250}
                  className="flex justify-center mr-1 mt-2 mb-4"
                ></Image>
              </a>
              <h2 className=" text-center text-2xl sm:text-3xl font-bold text-white drop-shadow-lg shadow-black mb-3">
                Allons chercher l&apos;innovation
              </h2>
              <p className="text-center font-bold text-white text-base sm:text-lg w-10/12 sm:w-4/5 xl:w-2/5">
                {isMobile
                  ? 'Vous êtes passionnés de technologie et souhaitez relever des défis innovants ? Rejoignez-nous aux prochains Silicon Days, un hackathon sur le thème "Technologie et société" organisé par Garage Isep !'
                  : 'Vous êtes passionnés de technologie et souhaitez relever des défis innovants ? Rejoignez-nous aux prochains Silicon Days, un hackathon organisé par Garage Isep ! Le thème de cette édition est "Technologie et société", vous permettant ainsi de découvrir aux côtés d\'enterprises innovantes les dernières tendances en matière de technologie pour accélérer la transition vers une société plus durable et responsable.'}
              </p>
              <CustomButton
                onClick={() =>
                  window.open(
                    'https://www.helloasso.com/associations/garage-isep/evenements/silicondays-2024',
                    '_blank'
                  )
                }
                className="bg-blue-600 px-8 mt-8 hover:bg-blue-700"
              >
                Rejoindre
              </CustomButton>
            </ApparitionAnimation>
            <hr className="w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-2/5 h-px h-1 my-8 bg-white border-0 rounded md:my-12" />
            {/* TODO : Caroussel pour la version mobile */}
            {/* {siliconSubThemes.map((o: SiliconSubThemesModel) => (
              <SiliconAdvantage
                name={o.name}
                description={o.description}
                icon={o.icon}
                alt={o.alt}
                key={o.id}
                company={o.company}
              />
            ))} */}
            <p className="text-lg font-bold mb-8">Plus de détails à venir...</p>
            {/* <hr className="w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-2/5 h-px h-1 bg-white border-0 rounded " />
            <h2 className=" mt-10 text-left mb-12 text-2xl font-bold">
              <span className="flex items-center">
                Agenda{' '}
                <Image
                  src={'/images/calendar.png'}
                  alt="calendar"
                  width={40}
                  height={40}
                  className="ml-4"
                />
              </span>
            </h2>
            {siliconCalendar.map((o: SiliconCalendarModel) => (
              <SiliconCalendar
                name={o.name}
                description={o.description}
                key={o.id}
              />
            ))}{' '} */}
          </div>

          <div className="grid place-items-center mt-5">
            <h2 className="sm:mt-0 text-center text-4xl font-bold text-white drop-shadow-lg shadow-black">
              Questions ?
            </h2>
            <CustomButton
              className="bg-blue-600 hover:bg-blue-700 px-10 mt-5 mb-12"
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
          </div>
        </main>
      </>
    </>
  );
};

export default SiliconDays;
