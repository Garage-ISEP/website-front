import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

interface Props {
  name: string;
  left: boolean;
  valueTop: string;
}

// top-[${valueTop}] lg:${direction}-0 xl:${direction}-[150px] 2xl:${direction}-[280px]
export const SiliconShape: FC<Props> = ({ name, valueTop, left }) => {
  return (
    <div
      className={classNames(
        'invisible lg:visible absolute',
        valueTop,
        left
          ? 'lg:left-0 xl:left-[150px] 2xl:left-[280px]'
          : 'lg:right-0 xl:right-[150px] 2xl:right-[280px]'
      )}
    >
      <Image
        src={`/images/silicon-shapes/${name}.png`}
        alt={name}
        width={160}
        height={160}
      ></Image>
    </div>
  );
};
