import Image from 'next/image';
import { OutlinedButton } from '../controls/Button/OutlinedButton';

export const GarageSection = () => {
  return (
    <section className="h-screen bg-[url('../assets/images/background-garage.jpg')] bg-cover flex items-center justify-center sm:justify-start">
      <div className="ml-10 w-10/12 sm:w-2/5">
        <Image
          src={'/g-logo-h-w.svg'}
          alt={''}
          width={310}
          height={310}
        ></Image>
        <h1 className="font-bold text-white text-3xl mt-4 text-center sm:text-left">
          Garage ISEP - Inovation Hub
        </h1>
        <p className="mt-10 mb-10 text-white text-xl text-center sm:text-left">
          Whether it’s training for a marathon or swimming laps at the pool,
          Apple Watch Series 4 has something for everyone. Now including yoga
          and hiking, the Workout app works every way you want to exercise. You
          can set individual goals, measure your calorie burn, and track your
          progress over time in the Activity app on your iPhone. Ready? Go.
        </p>
        <div className="flex justify-center sm:justify-start">
          {/* Vers mail dans un premier temps, plus tard renvoyer vers section contact */}
          <OutlinedButton
            onClick={() =>
              (window.location.href = 'mailto:bureau@garageisep.com')
            }
            className="border-white text-white"
            color="white"
          >
            Nous contacter
          </OutlinedButton>
        </div>
      </div>
    </section>
  );
};
