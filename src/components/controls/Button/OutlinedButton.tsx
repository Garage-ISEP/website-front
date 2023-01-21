import { Button, ButtonProps } from '@material-tailwind/react';
import classNames from 'classnames';
import { FC } from 'react';

export const OutlinedButton: FC<ButtonProps> = ({ className, children }) => {
  return (
    <Button
      variant={'outlined'}
      className={classNames('ml-5 mt-5 rounded', className)}
    >
      {children}
    </Button>
  );
};
