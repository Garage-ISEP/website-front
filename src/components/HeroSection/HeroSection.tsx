/* eslint-disable @next/next/no-img-element */

import { Header } from '../Header/Header';

export const HeroSection = () => {
  return (
    <section className="w-full tails-selected-element mt-6">
      <div className="relative h-auto pb-45 sm:pb-48 md:pb-56">
        <div className="absolute top-[-2.5%] left-0 w-full h-full origin-top-left transform -skew-y-6">
          <img
            src="https://cdn.devdojo.com/tails/images/a5R9hePd7Rk0THmwyes7Q4xCpBlnhgPf62CDx4Nm.svg"
            className="absolute inset-0 object-cover w-full h-full 2xl:shadow-2xl"
            alt="background"
          ></img>
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              ></path>
            </svg>
            <span className="">Garage ISEP 2022/2023 - Innovation Hub</span>
          </p>
          <div className="container relative max-w-3xl mx-auto lg:mt-32 2xl:mt-0 md:mt-1.5">
            <img
              className="mx-auto object-cover w-96 h-24 sm:my-6"
              src="https://cdn.devdojo.com/tails/images/Rr6NVQ53bPUG7zZyIrHIL49GH36GaQEzHb1aCZ9x.svg"
              alt="Silicon Days logo"
            ></img>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl 2xl:tracking-tight 2xl:shadow-none md:drop-shadow-lg">
              Allons chercher l&apos;innovation.
            </h1>

            <p className="mt-6 text-base text-pink-100 2xl:text-lg 2xl:font-bold 2xl:text-white sm:text-white sm:font-extrabold xl:font-semibold md:font-semibold">
              Vous êtes passionné·e·s de technologie et souhaitez relever des
              défis innovants ? Rejoignez-nous aux prochains Silicon Days, un
              hackathon organisé par le Garage Isep Innovation Hub !
            </p>
          </div>
          <div className="relative flex justify-center max-w-3xl mx-auto mt-10">
            <div className="inline-block w-full overflow-hidden font-mono font-medium text-white bg-white rounded-lg shadow-sm bg-opacity-10 text-">
              <div className="flex items-center w-full h-12 pl-4 bg-transparent opacity-80">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              <div className="px-5 pt-1 pb-5 md:pt-1 sm:m-0">
                <p className="">$ sudo silicon_days_2023</p>
                <p className="mt-4">
                  Silicon Days [Version 1.0]<br></br>2023 Garage ISEP<br></br>{' '}
                </p>
                <p className="">
                  <br></br>Loading ideas...Ready to Deploy 🚀
                </p>
                <p className="flex items-center mx-auto md:mx-0 md:pb-3">
                  $ Enter Your Name: [...]
                </p>
                <a href="#" className="">
                  <button
                    type="button"
                    className="font-bold text-white bg-gradient-to-br from-amber-300 via-fuchsia-400 to-violet-600 hover:border-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 xl:text-xl 2xl:font-extrabold 2xl:drop-shadow-lg 2xl:rounded-lg 2xl:border-white sm:my-5"
                  >
                    Inscriptions
                  </button>
                </a>
                {/* Add a button here */}
              </div>
              {/*<div className="tails-hover-element"></div></div>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
