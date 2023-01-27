import { Button, ButtonProps } from '@material-tailwind/react';
import classNames from 'classnames';
import { FC } from 'react';

export const OutlinedButton: FC<ButtonProps> = ({ className, children }) => {
  return (
    <Button variant={'outlined'} className={classNames('rounded', className)}>
      {children}
    </Button>
  );
};
