import classNames from 'classnames';
import { FC } from 'react';

interface Props {
  color?: string;
  clickColor?: string;
  className?: string;
  children?: React.ReactNode;
}

// Pour les couleurs, utiliser une couleur tailwindcss (ex: 'red-500'), utiliser le format [#1da1f2] ajouter une couleur custom dans le fichier tailwind.config.js
export const CustomButton: FC<Props> = ({
  color,
  clickColor,
  className,
  children,
}) => {
  return (
    <button
      className={classNames(
        `bg-${
          color || 'blue-500'
        } text-white uppercase font-bold py-2 px-8 rounded hover:shadow-xl active:bg-${clickColor} '}`,
        className
      )}
    >
      {children}
    </button>
  );
};
