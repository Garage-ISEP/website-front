import { FC } from 'react';
import { ModelLabs } from './interfaces';
import { Props } from './interfaces';
import { datasLabs } from '@/data/labs';

const Lab: FC<Props> = ({ image, name, description }) => {
  return (
    <div className="grid place-items-center p-2 sm:p-6 transition-all duration-150 bg-white rounded-lg shadow-xl ease hover:shadow-2xl">
      <div className="relative inline-flex items-center justify-center  h-14 overflow-hidden text-white rounded-full">
        <span className="text-2xl text-blue-900 font-bold">{name}</span>
      </div>
      <div className="mt-1 mb-6">
        <div className="flex justify-center">
          <img src={image} className="m-3 p-1" width={'180px'} height={'auto'}/>
        </div>
      </div>
      <div>
        <p className="m-2 text-center leading-6 text-white-500">
          {description}
        </p>
      </div>
    </div>
  );
};


export const AffichageLabs: FC = ({}) => {
  return (
    <section className="pb-10 ">
      <div className="grid place-items-center">
        <h1 className="mt-10 mb-10 text-4xl font-bold">Les labs</h1>
        <div className="w-11/12 sm:w-9/12 2xl:w-8/12">
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 lg:gap-8 last:col-start-2 col-start-1">
            {datasLabs && (datasLabs.map((number: ModelLabs) => (
              <Lab
                image={number.image}
                name={number.name}
                description={number.description}
                key={number.id}
              />
            )))}
          </div>
        </div>
      </div>
    </section>
  );
};


