import { NumberGarageModel, numbersGarage } from '@/data/numbers-garage';
import { FC } from 'react';
import { NumberCard } from './NumberCard';

export const GarageNumberSection: FC = ({}) => {
  return (
    <section className="h-screen bg-gray-100">
      <div className="grid place-items-center">
        <h1 className="mt-10 text-4xl font-bold">Garage ISEP</h1>
        <h2 className="font-bold text-2xl mt-2 text-blue-800">
          en quelques chiffres...
        </h2>

        {numbersGarage.map((number: NumberGarageModel) => (
          <NumberCard
            value={number.value}
            name={number.name}
            desciption={number.description}
            key={number.id}
          />
        ))}
      </div>
    </section>
  );
};
