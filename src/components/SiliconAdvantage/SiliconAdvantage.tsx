import Image from 'next/image'
import { FC } from 'react'

interface Props {
  name: string
  description: string
  icon: string
  alt: string
}

export const SiliconAdvantage: FC<Props> = ({
  name,
  description,
  icon,
  alt,
}) => {
  return (
    <div className="sm:flex flex-row w-10/12 sm:w-4/5 xl:w-1/2 mb-20">
      <div className=" basis-3/12 ">
        <div className="flex justify-center sm:justify-start">
          <div>
            <Image
              src={`/images/${icon}`}
              alt={alt}
              width={100}
              height={100}
              className="mb-3 ml-5 sm:ml-3"
            ></Image>
            <h1 className="text-2xl mb-5 sm:mb-0 sm:text-xl text-white font-bold ">
              {name}
            </h1>
          </div>
        </div>
      </div>

      <p className="basis-9/12 text-xl text-white font-bold flex-3 text-center sm:text-left ">
        {description}
      </p>
    </div>
  )
}
