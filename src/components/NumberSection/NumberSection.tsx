import { NumberGarageModel, numbersGarage } from '@/data/numbers-garage';
import { FC } from 'react';
import { AnimationTop } from '../Animations/AnimationTop/AnimationTop';
import { NumberCard } from './NumberCard';

export const GarageNumberSection: FC = ({}) => {
  return (
    <section className="pb-10 min-h-screen">
      <div className="grid place-items-center">
        <h1 className="mt-10 text-4xl font-bold">Garage ISEP</h1>
        <h2 className="font-bold text-2xl mt-2 text-blue-800 mb-8">
          en quelques chiffres...
        </h2>
        <div className="w-11/12 sm:w-9/12 2xl:w-8/12 2xl:mt-10">
          <AnimationTop>
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 lg:gap-8 last:col-start-2 col-start-1">
              {numbersGarage.map((number: NumberGarageModel) => (
                <NumberCard
                  key={number.id}
                  value={number.value}
                  name={number.name}
                  desciption={number.description}
                />
              ))}
            </div>
          </AnimationTop>
        </div>
      </div>
    </section>
  );
};
