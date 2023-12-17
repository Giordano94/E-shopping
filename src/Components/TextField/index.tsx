import type { FC } from 'react';
import MUITextField from '@mui/material/TextField';
import type { TextFieldProps as MUITextFieldProps } from '@mui/material/TextField';

const TextField: FC<MUITextFieldProps> = ({ ...props }) => (
  <MUITextField {...props} />
);

export default TextField;
