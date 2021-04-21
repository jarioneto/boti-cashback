import React from 'react';

// Material UI
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

// Assets
import { ReactComponent as MoneyIcon } from 'assets/images/money.svg';

// Styles
import useStyles from './styles';

const Orders: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <MoneyIcon />
      <div>
        <Typography component="h2" className={classes.title}>
          R$ 1950,00
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          Saldo disponível
        </Typography>
      </div>
    </Box>
  );
};

export default Orders;
