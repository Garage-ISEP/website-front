import { FC } from 'react';
import { Props } from './LabTypes';
import Image from 'next/image';

export const Lab: FC<Props> = ({ image, name, description }) => {
  return (
    <div className="grid place-items-center p-2 sm:p-6 transition-all duration-150 bg-white rounded-lg shadow-xl ease hover:shadow-2xl">
      <div className="relative inline-flex items-center justify-center h-14 overflow-hidden text-white rounded-full">
        <span className="text-2xl text-blue-900 font-bold">{name}</span>
      </div>
      <div className="mb-4">
        <div className="flex justify-center">
          <Image
            src={`/${image}`}
            className="m-1"
            width={'75'}
            height={'75'}
            alt={`${name} logo`}
          />
        </div>
      </div>
      <div>
        <p className="m-1 text-center leading-5 text-white-300">
          {description}
        </p>
      </div>
    </div>
  );
};
