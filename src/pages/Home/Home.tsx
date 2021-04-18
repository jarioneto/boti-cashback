import React from 'react';

// Material UI
import Grid from '@material-ui/core/Grid';
import { Hidden, Typography } from '@material-ui/core';

// Components
import Login from 'components/Login';

// Styles
import useStyles from './styles';

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Hidden mdDown>
        <Grid item lg={8}>
          <div className={classes.content}>
            <Typography component="h1" className={classes.title}>
              Bem-vindo ao
            </Typography>
            <Typography component="h2" className={classes.subtitle}>
              Boti<strong>Cashback</strong>
            </Typography>
          </div>
        </Grid>
      </Hidden>

      <Grid item lg={4} xs={12}>
        <Login />
      </Grid>
    </Grid>
  );
};

export default Home;
