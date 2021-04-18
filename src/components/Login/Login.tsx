import React, { useState } from 'react';

// Material UI
import { Box, Typography } from '@material-ui/core';

// Components
import Button from 'components/Button';
import SignIn from 'components/SignIn';
import SignUp from 'components/SignUp';

// Styles
import useStyles from './styles';

type Scenario = 'signin' | 'signup';

const Login: React.FC = () => {
  const classes = useStyles();

  const [scenario, setScenario] = useState<Scenario>('signin');
  const isSignIn = scenario === 'signin';

  const footerDescription = isSignIn ? 'Não tem conta? ' : 'Já possui conta? ';
  const footerAction = isSignIn ? 'Cadastre-se.' : 'Entrar.';

  const toogleScenario = () => {
    setScenario((actualScenario) => (actualScenario === 'signin' ? 'signup' : 'signin'));
  };

  return (
    <Box className={classes.container}>
      {isSignIn && (
        <div className={classes.header}>
          <Typography component="h3" className={classes.description}>
            Faça o login para acessar a <strong>plataforma</strong>
          </Typography>
        </div>
      )}

      <div className={classes.content}>
        {isSignIn ? <SignIn /> : <SignUp goBack={toogleScenario} />}
      </div>

      <div className={classes.footer}>
        <Typography variant="body2" color="textSecondary">
          {footerDescription}
          <Button
            variant="text"
            color="default"
            size="medium"
            disableRipple
            onClick={toogleScenario}
          >
            {footerAction}
          </Button>
        </Typography>
      </div>
    </Box>
  );
};

export default Login;
