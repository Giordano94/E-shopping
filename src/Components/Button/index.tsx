import type { FC } from 'react';
import MUIButton from '@mui/material/Button';
import type { ButtonProps as MUIButtonProps } from '@mui/material/Button';

export interface ButtonProps extends MUIButtonProps {
  title: string;
}

const Button: FC<ButtonProps> = ({ title, ...props }) => {
  return <MUIButton {...props}>{title}</MUIButton>;
};

export default Button;
