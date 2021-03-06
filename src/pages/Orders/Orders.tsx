import React from 'react';

// Material UI
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

// Components
import List from 'components/List';
import Cashback from 'components/Cashback';
import Header from 'components/Header';
import OrderForm from 'components/OrderForm';

// Context
import OrderContext from 'contexts/OrderContext';

// Styles
import useStyles from './styles';

const Orders: React.FC = () => {
  const classes = useStyles();

  return (
    <OrderContext.Provider value={[]}>
      <Header />
      <div className={classes.container}>
        <Box className={classes.header}>
          <Box>
            <Typography component="h1" className={classes.title}>
              Compras
            </Typography>
          </Box>
          <Box>
            <Cashback />
          </Box>
        </Box>
        <List />
      </div>
      <OrderForm />
    </OrderContext.Provider>
  );
};

export default Orders;
