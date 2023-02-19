import Image from 'next/image';
import { FC } from 'react';

interface Props {
  name: string;
  description: string;
  icon: string;
  alt: string;
  company?: string;
}

export const SiliconAdvantage: FC<Props> = ({
  name,
  description,
  icon,
  alt,
  company,
}) => {
  return (
    <div className="ml-9 mr-5 sm:mr-0 sm:ml-0 w-10/12 sm:w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-2/5 mb-16 ">
      <div className="flex items-center	mb-4">
        <span className="text-lg sm:text-2xl text-gray-900 font-bold">
          {name}

          <span className="italic">{company ? `, ${company}` : ''}</span>
        </span>

        <Image
          src={`/images/icons-advantages/${icon}`}
          alt={alt}
          width={35}
          height={35}
          className="ml-4"
        ></Image>
      </div>

      <p className="text-lg sm:text-xl text-white font-bold">{description}</p>
    </div>
  );
};
