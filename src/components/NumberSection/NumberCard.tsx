import { FC } from 'react';

interface Props {
  value: string;
  name: string;
  desciption?: string;
  className?: string;
}

export const NumberCard: FC<Props> = ({ value, name, desciption }) => {
  return (
    <div className="grid place-items-center p-2 sm:p-6 transition-all duration-150 bg-white rounded shadow-xl ease hover:shadow-2xl">
      <div className="relative inline-flex items-center justify-center  h-14 overflow-hidden text-white rounded-full">
        <span className="text-2xl text-blue-500 font-bold">{value}</span>
      </div>
      <div className="mt-1 mb-6">
        <h5 className="pb-2 text-xl font-bold leading-6 text-gray-600 text-center">
          {name}
        </h5>
        <p className="mt-1 text-center leading-6 text-gray-500">
          {desciption}{' '}
        </p>
      </div>
    </div>
  );
};
