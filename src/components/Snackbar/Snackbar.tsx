import { Snackbar } from '@mui/material';
import React, { Dispatch, FC, ReactElement, SetStateAction } from 'react';

interface ISnackbarError {
  open: boolean;
  toggleOpen: Dispatch<SetStateAction<boolean>>;
  children?: ReactElement;
}

export const SnackbarError: FC<ISnackbarError> = ({ open, children, toggleOpen }) => {
  return (
    <Snackbar open={open} autoHideDuration={2000} onClose={() => toggleOpen(false)}>
      {children}
    </Snackbar>
  );
};
