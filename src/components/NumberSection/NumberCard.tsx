import { FC } from 'react';

interface Props {
  value: string;
  name: string;
  desciption?: string;
}

export const NumberCard: FC<Props> = ({ value, name, desciption }) => {
  return (
    <div>
      {value}
      {name}
      {desciption}
    </div>
  );
};
