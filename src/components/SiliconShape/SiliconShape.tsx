import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { AnimationSide } from '../Animations/AnimationSide/AnimationSide';

interface Props {
  name: string;
  left: boolean;
  valueTop: string;
}

// top-[${valueTop}] lg:${direction}-0 xl:${direction}-[150px] 2xl:${direction}-[280px]
export const SiliconShape: FC<Props> = ({ name, valueTop, left }) => {
  return (
    <AnimationSide>
      <div
        className={classNames(
          'invisible lg:visible absolute',
          valueTop,
          left
            ? 'lg:left-0 xl:left-[170px] 2xl:left-[310px]'
            : 'lg:right-0 xl:right-[170px] 2xl:right-[310px]'
        )}
      >
        <Image
          src={`/images/silicon-shapes/${name}.png`}
          alt={name}
          width={160}
          height={160}
        ></Image>
      </div>
    </AnimationSide>
  );
};
