import classNames from 'classnames';
import Image from 'next/image';

export const ContactSection = () => {
  return (
    <section className=" " id="contact">
      <div
        className={classNames(
          {
            /*"bg-[url('../assets/images/background-contact.jpg')] h-screen sm:h-4/6 bg-cover"*/
          },
          'grid place-items-center mb-16'
        )}
      >
        <div
          className={classNames(
            {
              /*'sm:mt-40 sm:translate-y-48'*/
            },
            'mt-20 bg-[#3D4242] w-10/12 sm:w-4/5 md:sm-2/3 lg:w-1/2 rounded py-8 text-white sm:px-5 drop-shadow-xl'
          )}
        >
          <h1 className="font-bold text-2xl sm:text-3xl uppercase text-center">
            Nous contacter
          </h1>
          <p className="text-center  mt-5 text-[#D5D5D5] mr-4 ml-4">
            Pour ne rien rater de notre actualité ou nous contacter
          </p>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 mx-44" />
          <div className="grid place-items-center sm:flex sm:mt-10 px-8 pb-3  ">
            <a
              className="grid place-items-center w-1/3 font-bold mb-4 sm:mb-0"
              href="https://www.facebook.com/garageisep/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={'/social-media/facebook.png'}
                alt={'facebook'}
                width={50}
                height={50}
              />
              <p className="uppercase mt-2 text-[#D5D5D5]">Facebook</p>
              <p className="text-sm mt-1">GarageISEP</p>
            </a>
            <a
              className="grid place-items-center w-1/3 font-bold mb-4 sm:mb-0"
              href="https://fr.linkedin.com/company/garageisep?original_referer="
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src={'/social-media/linkedin.png'}
                alt={'facebook'}
                width={50}
                height={50}
              />
              <p className="uppercase mt-2 text-[#D5D5D5]">Linkedin</p>
              <p className="text-sm mt-1">GarageISEP</p>
            </a>
            <a
              className="grid place-items-center font-bold sm:w-1/3 mb-4 sm:mb-0"
              href="mailto:bureau@garageisep.com"
            >
              <Image
                src={'/social-media/email.png'}
                alt={'facebook'}
                width={50}
                height={50}
              />
              <p className="uppercase mt-2 text-[#D5D5D5]">Email</p>
              <p className="text-sm sm:text-xs	lg:text-sm mt-1">
                bureau@garageisep.com
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
