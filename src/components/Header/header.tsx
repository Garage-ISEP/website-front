/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
export const Header = () => {
  return (
    <section className="w-full tails-selected-element">
      <div className="relative h-auto pb-32 sm:pb-48 md:pb-56">
        <div className="absolute top-0 left-0 w-full h-full origin-top-left transform -skew-y-6">
          <img
            src="https://cdn.devdojo.com/tails/images/a5R9hePd7Rk0THmwyes7Q4xCpBlnhgPf62CDx4Nm.svg"
            className="absolute inset-0 object-cover w-full h-full 2xl:shadow-2xl"
          ></img>
        </div>
        <div className="px-10 mx-auto max-w-7xl">
          <div className="relative flex items-center justify-between h-20 mx-auto 2xl:mx-auto">
            <a
              href="/"
              className="relative flex items-center text-xl font-bold text-white"
            >
              {/*
                        garage
                        <span className="flex items-center justify-center h-4 px-2 ml-2 font-mono text-xs leading-none text-purple-500 bg-gray-100 rounded-full">creator</span>
  */}
              <img
                className="object-scale-down h-16"
                src="https://cdn.devdojo.com/tails/images/QL2K5DTLLktLTeLfDOZ5ub5wDfXvf1NciZC15uNo.png"
              ></img>
            </a>
            <nav className="text-sm font-bold text-white sm:text-base 2xl:text-xl">
              {/*<a href="#_" className="relative inline-block px-0 pb-1 mr-2 group sm:mr-4">
                <span className="">Projets</span>
                <span className="h-0.5 w-full absolute bottom-0 opacity-0 group-hover:opacity-100 transition ease-out duration-200 translate-y-1 group-hover:-translate-y-0 left-0 bg-white"></span>
</a>*/}
              <a
                href="#"
                className="relative inline-block px-0 pb-1 mr-2 group sm:mr-4"
              >
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 contenteditable= 2xl:drop-shadow">
                  SiliconDays
                </span>
                <span className="h-0.5 w-full absolute bottom-0 opacity-0 group-hover:opacity-100 transition ease-out duration-200 translate-y-1 group-hover:-translate-y-0 left-0 bg-gradient-to-r from-purple-400 to-pink-600"></span>
              </a>
              <a
                href="#"
                className="relative inline-block px-0 pb-1 mr-2 group sm:mr-4"
              >
                <span className="">Events</span>
                <span className="h-0.5 w-full absolute bottom-0 opacity-0 group-hover:opacity-100 transition ease-out duration-200 translate-y-1 group-hover:-translate-y-0 left-0 bg-white"></span>
              </a>
              <a
                href="#_"
                className="relative inline-block px-0 pb-1 pl-7 group"
              >
                <span className="flex items-center h-full">
                  <span className="">Github</span>
                  <svg
                    className="absolute left-0 w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                      className=""
                    ></path>
                    ;
                  </svg>
                </span>
                <span className="h-0.5 w-full absolute bottom-0 opacity-0 group-hover:opacity-100 transition ease-out duration-200 translate-y-1 group-hover:-translate-y-0 left-0 bg-white"></span>
              </a>
            </nav>
          </div>
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
            ></img>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl 2xl:tracking-tight 2xl:shadow-none md:drop-shadow-lg">
              Allons chercher l&apos;innovation.
            </h1>
            <p className="flex items-center mt-6 text-base font-medium text-white sm:text-lg md:font-mono tails-preview md:text-white">
              <svg
                className="w-auto h-5 mr-2 text-white fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
              </svg>
              <span className="">Sous titre 1</span>
            </p>
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
  )
}
