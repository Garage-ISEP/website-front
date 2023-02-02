import Image from 'next/image';

export const AppFooter = () => {
  return (
    <div className="flex items-end w-full min-h-screen">
      <footer className="w-full text-white bg-[#3D4242] body-font">
        <div className="flex justify-center mt-3">
          <Image
            src={'/logo-h-white.png'}
            alt={'Logo Garage ISEP'}
            width={300}
            height={300}
          ></Image>
        </div>
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-1/2 h-[2.5px] my-8 bg-gray-200 border-0 dark:bg-gray-700 rounded" />
          <span className="absolute px-3 text-lg font-medium -translate-x-1/2 bg-[#3D4242] left-1/2 dark:text-white dark:bg-gray-900 uppercase">
            Rejoignez nous
          </span>
        </div>
        <div className="flex justify-center mt-3 mb-4">
          <a
            className="text-gray-500 cursor-pointer hover:text-gray-700 mx-4"
            href="https://www.facebook.com/garageisep/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              fill="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-7 h-7"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>

          <a
            className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700 mx-4"
            href="https://www.instagram.com/garageisep/?hl=fr"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-7 h-7"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a
            className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700 mx-4"
            href="https://www.linkedin.com/company/garageisep/mycompany/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              className="w-7 h-7"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </div>
        <div className="text-center text-gray-400 mt-10 text-sm mb-2">
          <span>© 2023 - </span>
          <a className=" font-semibold" href="https://tailwind-elements.com/">
            Garage ISEP
          </a>
        </div>
      </footer>
    </div>
  );
};
