import React from 'react';

// Material UI
import CircularProgress from '@material-ui/core/CircularProgress';

// Styles
import useStyles from './styles';

const Loader: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
