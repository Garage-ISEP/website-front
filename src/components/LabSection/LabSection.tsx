import { datasLabs } from '@/data/labs';
import { FC } from 'react';
import { Lab } from './labs/lab';
import { ModelLabs } from './labs/LabTypes';

export const LabsSection: FC = ({}) => {
  return (
    <section className="pb-10 bg-[#3D4242] min-h-screen ">
      <div className="grid place-items-center">
        <h1 className="mt-10 mb-10 text-4xl font-bold text-white">Les labs</h1>
        <div className="w-11/12 sm:w-9/12 2xl:w-8/12">
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 lg:gap-8 last:col-start-2 col-start-1">
            {datasLabs &&
              datasLabs.map((number: ModelLabs) => (
                <Lab
                  image={number.image}
                  name={number.name}
                  description={number.description}
                  key={number.id}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
