import { GlobalContext } from '@/Contexts/GlobalContext/GlobalContext';
import { partners, PartnersModel } from '@/data/partners';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';

export const GaragePartnersSection = () => {
  const [mounted, setMounted] = useState(false);
  const { isMobile } = useContext(GlobalContext);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      {mounted && (
        <section>
          <div className="grid place-items-center">
            <h1 className="mt-10 sm:mb-12 text-4xl font-bold">
              Nos partenaires
            </h1>
            {!isMobile || partners.length == 1 ? (
              <div className=" sm:flex sm:flex-wrap sm:gap-8 justify-center sm:w-11/12 xl:w-10/12 2xl:w-9/12 mb-10 mt-5 sm:mt-0 sm:mb-20 ">
                {partners.map((partner) => (
                  <Image
                    src={`/images/partners/${partner.image}`}
                    alt={partner.alt || ''}
                    key={partner.id}
                    width={250}
                    height={250}
                    className="h-28 object-contain	mb-10 sm:mb-0"
                  />
                ))}
              </div>
            ) : (
              <div className="sm:hidden h-64 w-11/12">
                <Carousel
                  leftControl={
                    <div
                      className="button absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                      data-carousel-prev
                    >
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-400 dark:bg-gray-800/30 group-hover:bg-gray-600 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-gray-500 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                          aria-hidden="true"
                          className="w-6 h-6 text-white dark:text-gray-800"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                          ></path>
                        </svg>
                        <span className="sr-only">Previous</span>
                      </span>
                    </div>
                  }
                  rightControl={
                    <div
                      className="button absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                      data-carousel-next
                    >
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-400 dark:bg-gray-800/30 group-hover:bg-gray-600 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-gray-500 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                          aria-hidden="true"
                          className="w-6 h-6 text-white dark:text-gray-800"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          ></path>
                        </svg>
                        <span className="sr-only">Next</span>
                      </span>
                    </div>
                  }
                >
                  {partners.map((partner: PartnersModel) => (
                    <div
                      key={partner.id}
                      className="flex h-10 items-center justify-center  dark:text-white w-6"
                    >
                      <Image
                        src={`/images/partners/${partner.image}`}
                        alt={partner.alt || ''}
                        width={250}
                        height={250}
                        className="h-28 object-contain	"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};
