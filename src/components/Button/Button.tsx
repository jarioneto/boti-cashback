import React from 'react';

// Material UI
import MuiButton from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ButtonProps } from '@material-ui/core';

// Styles
import useStyles from './styles';

type Props = ButtonProps & {
  loading?: boolean;
};

const Button: React.FC<Props> = ({
  loading,
  children,
  variant = 'contained',
  color = 'primary',
  size = 'large',
  disableElevation = true,
  ...buttonProps
}) => {
  const classes = useStyles();

  return (
    <MuiButton
      variant={variant}
      color={color}
      size={size}
      disableElevation={disableElevation}
      disabled={loading}
      {...buttonProps}
    >
      {children}
      {loading && <CircularProgress className={classes.circularProgress} size={18} />}
    </MuiButton>
  );
};

export default Button;
