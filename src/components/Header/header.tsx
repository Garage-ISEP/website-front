/* eslint-disable @next/next/no-img-element */
import { GlobalContext } from '@/Contexts/GlobalContext/GlobalContext';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useContext, useEffect, useState } from 'react';

interface Props {
  logo?: string;
  logoMobile?: string;
  pushedEvent?: string;
  pushedEventStyle?: string;
  hoverPushedStyle?: string;
  className?: string;
  linkPushed?: string;
}
export const Header: FC<Props> = ({
  logo,
  pushedEvent,
  pushedEventStyle,
  hoverPushedStyle,
  className,
  logoMobile,
  linkPushed,
}) => {
  const { isMobile } = useContext(GlobalContext);

  return (
    <header
      className={classNames(
        'bg-transparent relative w-11/12 flex items-center justify-between h-20 mx-auto 2xl:mx-auto z-20',
        className
      )}
    >
      <Link
        href="/"
        className="relative flex items-center text-xl font-bold text-white"
      >
        {/*
                        garage
                        <span className="flex items-center justify-center h-4 px-2 ml-2 font-mono text-xs leading-none text-purple-500 bg-gray-100 rounded-full">creator</span>
  */}
        <img
          className="object-scale-down h-16"
          alt="Logo Garage"
          src={
            logo
              ? isMobile
                ? logoMobile
                : logo
              : isMobile
              ? 'https://cdn.devdojo.com/tails/images/QL2K5DTLLktLTeLfDOZ5ub5wDfXvf1NciZC15uNo.png'
              : '/images/logo-black.png'
          }
        ></img>
      </Link>
      <nav className="text-sm font-bold text-white sm:text-base 2xl:text-xl">
        {/*<a href="#_" className="relative inline-block px-0 pb-1 mr-2 group sm:mr-4">
                <span className="">Projets</span>
                <span className="h-0.5 w-full absolute bottom-0 opacity-0 group-hover:opacity-100 transition ease-out duration-200 translate-y-1 group-hover:-translate-y-0 left-0 bg-white"></span>
</a>*/}
        <Link
          href={linkPushed ? linkPushed : '/'}
          className="relative inline-block px-0 pb-1 mr-2 group sm:mr-4"
        >
          <span
            className={classNames(
              'font-extrabold  2xl:drop-shadow',
              pushedEventStyle
            )}
          >
            {pushedEvent}
          </span>
          <span
            className={classNames(
              'h-0.5 w-full absolute bottom-0 opacity-0 group-hover:opacity-100 transition ease-out duration-200 translate-y-1 group-hover:-translate-y-0 left-0 bg-white',
              hoverPushedStyle
            )}
          ></span>
        </Link>
        {/*<Link
          href="#"
          className="relative inline-block px-0 pb-1 mr-2 group sm:mr-4"
        >
          <span className="">Events</span>
          <span className="h-0.5 w-full absolute bottom-0 opacity-0 group-hover:opacity-100 transition ease-out duration-200 translate-y-1 group-hover:-translate-y-0 left-0 bg-white"></span>
            </Link>*/}
        <Link
          href="https://github.com/Garage-ISEP/"
          target={'_blank'}
          className="relative inline-block px-0 pb-1 pl-7 group"
        >
          <span className="flex items-center h-full">
            <span className="">Github</span>
            <svg
              className="absolute left-0 w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
                className=""
              ></path>
              ;
            </svg>
          </span>
          <span className="h-0.5 w-full absolute bottom-0 opacity-0 group-hover:opacity-100 transition ease-out duration-200 translate-y-1 group-hover:-translate-y-0 left-0 bg-white"></span>
        </Link>
      </nav>
    </header>
  );
};
