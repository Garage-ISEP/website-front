import { GlobalContext } from '@/Contexts/GlobalContext/GlobalContext';
import Image from 'next/image';
import { useContext } from 'react';
import { CustomButton } from '../controls/Button/CustomButton';
import { Header } from '../Header/header';
import { ApparitionAnimation } from '../Animations/ApparitionAnimation/ApparitionAnimation';

export const HeroSection = () => {
  const { goToPath, goToExternalUrl } = useContext(GlobalContext);
  const year = new Date().getFullYear();

  return (
    <section className="w-full tails-selected-element mt-2 sm:mt-4">
      <div className="relative h-auto pb-45 sm:pb-48 md:pb-56">
        <div className="absolute top-[-2.5%] left-0 w-full h-full origin-top-left transform -skew-y-6">
          <Image
            src="https://cdn.devdojo.com/tails/images/a5R9hePd7Rk0THmwyes7Q4xCpBlnhgPf62CDx4Nm.svg"
            className="absolute inset-0 object-cover w-full h-full 2xl:shadow-2xl"
            alt="background"
            width={50}
            height={50}
          ></Image>
        </div>
        <div className="px-10 mx-auto max-w-7xl">
          <Header
            logo={
              'https://cdn.devdojo.com/tails/images/QL2K5DTLLktLTeLfDOZ5ub5wDfXvf1NciZC15uNo.png'
            }
            pushedEvent={'SiliconDays'}
            pushedEventStyle={
              'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'
            }
            hoverPushedStyle={'bg-gradient-to-r from-purple-400 to-pink-600'}
            className={'w-10/12'}
            logoMobile={'/images/logo-black.png'}
            linkPushed={'/silicon-days'}
          />
          <p className="absolute left-0 items-center hidden mt-48 ml-6 text-xs text-white uppercase origin-left transform rotate-90 lg:flex opacity-70">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              ></path>
            </svg>
            <span className="">Garage ISEP {year} - Innovation Hub</span>
          </p>
          <ApparitionAnimation classNames="container relative max-w-3xl mx-auto lg:mt-2 2xl:mt-0 md:mt-1.5">
            <Image
              className="mx-auto object-cover w-64 sm:w-96 h-20 sm:h-24 sm:my-6"
              src="https://cdn.devdojo.com/tails/images/Rr6NVQ53bPUG7zZyIrHIL49GH36GaQEzHb1aCZ9x.svg"
              alt="Silicon Days logo"
              width={50}
              height={50}
            ></Image>
            <h1 className="text-2xl mt-1 sm:mt-0 sm:text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl 2xl:tracking-tight 2xl:shadow-none md:drop-shadow-lg">
              Allons chercher l&apos;innovation.
            </h1>

            <p className="mt-3 sm:mt-6 text-sm sm:text-base  text-pink-100 2xl:text-lg 2xl:font-bold 2xl:text-white sm:text-white sm:font-extrabold xl:font-semibold md:font-semibold">
              Vous êtes passionné·e·s de technologie et souhaitez relever des
              défis innovants ? Rejoignez-nous aux prochains Silicon Days, un
              hackathon organisé par le Garage ISEP Innovation Hub !
            </p>
          </ApparitionAnimation>
          <div className="relative flex justify-center max-w-3xl mx-auto mt-6 sm:mt-10 pb-20 sm:pb-0">
            <ApparitionAnimation classNames="w-full">
              <div className="inline-block w-full overflow-hidden font-mono font-medium text-white bg-white rounded-lg shadow-sm bg-opacity-10 text-sm sm:text-base">
                <div className="flex items-center w-full h-12 pl-4 bg-transparent opacity-80">
                  <div className="flex space-x-1.5">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="px-5 pt-0 sm:pt-1 pb-5  sm:mb-0 md:pt-1 sm:m-0">
                  <p className="">$ sudo silicon_days_{year}</p>
                  <p className="mt-1 sm:mt-4">
                    Silicon Days [Version 1.0]<br></br>
                    {year} Garage ISEP<br></br>{' '}
                  </p>
                  <p className="">
                    <br></br>Loading ideas...Ready to Deploy 🚀
                  </p>
                  <p className="flex items-center mx-auto md:mx-0 md:pb-3">
                    $ Enter Your Name: [...]
                  </p>
                  <div className="mt-5 ">
                    <CustomButton
                      onClick={() =>
                        goToExternalUrl(
                          'https://form.jotform.com/230302121540333'
                        )
                      }
                      className="w-2/3 max-[400px]:w-3/4 sm:w-auto bg-blue-600 hover:bg-blue-700 mr-5 mb-2"
                    >
                      Inscriptions
                    </CustomButton>

                    <CustomButton
                      onClick={() => goToPath('/silicon-days')}
                      className="w-2/3 max-[400px]:w-3/4 sm:w-auto bg-blue-600 hover:bg-blue-700"
                    >
                      En savoir plus
                    </CustomButton>
                  </div>
                </div>
                {/*<div className="tails-hover-element"></div></div>*/}
              </div>
            </ApparitionAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};
