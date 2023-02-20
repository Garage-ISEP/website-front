import Image from 'next/image';
import { OutlinedButton } from '../controls/Button/OutlinedButton';

export const GarageSection = () => {
  return (
    <section
      className="h-screen bg-[url('../assets/images/background-garage3.jpg')] bg-cover flex items-center justify-center sm:justify-start"
      id="GarageISEP"
    >
      <div className="w-10/12 sm:w-3/5 lg:w-2/5 sm:ml-16 xl:ml-20">
        <Image
          src={'/g-logo-h-w.svg'}
          alt={''}
          width={310}
          height={310}
        ></Image>
        <h1 className="font-bold text-white text-2xl sm:text-3xl mt-4 text-center sm:text-left">
          Garage ISEP - Inovation Hub
        </h1>
        <p className="mt-4 sm:mt-10 mb-6 sm:mb-10 text-white text-lg sm:text-xl text-center sm:text-left">
          Garage ISEP est l’association étudiante de l’Isep centrée sur
          l’innovation. Fondée en 2017, elle se donne pour mission de fédérer
          les étudiants autour des nouvelles technologies et de les rendre
          acteurs de leur propre formation. Répartis en labs spécialisés, les
          membres développent des projets innovants, organisent des conférences
          ou des workshops, et participent à des hackathons.
        </p>

        <a href="#contact" className="flex justify-center sm:justify-start ">
          <OutlinedButton
            className="border-white text-white sm:mt-4"
            color="white"
          >
            Nous contacter
          </OutlinedButton>
        </a>
      </div>
    </section>
  );
};
