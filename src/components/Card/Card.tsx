import React from 'react';

// Material UI
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

// Assets
import { ReactComponent as CashbackIcon } from 'assets/images/cashback.svg';

// Styles
import useStyles from './styles';

// Types
import { Order } from 'types';

// Utils
import { parseDate, parseCurrency } from 'utils/parsers';

type Props = {
  order: Order;
};

const Card: React.FC<Props> = ({ order }) => {
  const classes = useStyles();

  const { code, status, date, total, cashbackPercent, cashbackTotal } = order;

  return (
    <Box className={classes.box}>
      <div className={`${classes.row} ${classes.status}`}>
        <CashbackIcon />
        <Chip label={status} variant="outlined" />
      </div>
      <div className={`${classes.row} ${classes.order}`}>
        <div>
          <Typography variant="inherit">{code}</Typography>
          <Typography variant="inherit">Compra</Typography>
        </div>
        <div>
          <Chip label={parseCurrency(total)} />
          <Typography variant="inherit">{parseDate(date)}</Typography>
        </div>
      </div>
      <div className={`${classes.row} ${classes.cashback}`}>
        <div>
          <Typography variant="inherit">Cashback</Typography>
        </div>
        <div>
          <Chip label={`${cashbackPercent}%`} variant="outlined" />
          <Chip label={parseCurrency(cashbackTotal)} variant="outlined" />
        </div>
      </div>
    </Box>
  );
};

export default Card;
