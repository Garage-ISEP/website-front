import { FC } from 'react';
import { AnimationSide } from '../Animations/AnimationSide/AnimationSide';

interface Props {
  name: string;
  description?: string;
}

export const SiliconCalendar: FC<Props> = ({ name, description }) => {
  return (
    <div className="sm:bg-transparent ml-9 mr-5 sm:mr-0 sm:ml-0 w-10/12 sm:w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-2/5 mb-10 ">
      <AnimationSide thresholdValue={0.1}>
        <div className="mb-3">
          <span className="text-lg sm:text-xl text-gray-900 font-bold">
            {name}
          </span>
        </div>

        <p className="text-base sm:text-lg text-white font-bold ">
          {description}
        </p>
      </AnimationSide>
    </div>
  );
};
