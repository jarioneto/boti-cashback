import React, { useEffect, useState } from 'react';

// Material UI
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

// Assets
import { ReactComponent as MoneyIcon } from 'assets/images/money.svg';

// Utils
import { parseCurrency } from 'utils/parsers';
import { getAuth } from 'utils/authentication';

// Services
import { fetchBalance } from 'services/api';

// Styles
import useStyles from './styles';

const Orders: React.FC = () => {
  const classes = useStyles();

  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const user = getAuth();

    fetchBalance(user.id).then(({ data }) => {
      setTotal(data.total);
    });
  }, []);

  return (
    <Box className={classes.container}>
      <MoneyIcon />
      <div>
        <Typography component="h2" className={classes.title}>
          {parseCurrency(total)}
        </Typography>
        <Typography variant="body1" className={classes.subtitle}>
          Saldo disponível
        </Typography>
      </div>
    </Box>
  );
};

export default Orders;
