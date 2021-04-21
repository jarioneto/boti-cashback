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
      <div className={classes.row}>
        <CashbackIcon />
        <Chip label={status} className={classes.chip} />
      </div>
      <div className={`${classes.row} ${classes.details}`}>
        <Typography variant="inherit">Detalhes da compra</Typography>
      </div>
      <div className={`${classes.row} ${classes.order}`}>
        <div>
          <Typography variant="inherit">{code}</Typography>
          <Typography variant="inherit">Código</Typography>
        </div>
        <div>
          <Typography variant="inherit">{parseDate(date)}</Typography>
          <Typography variant="inherit">Data</Typography>
        </div>
      </div>
      <div className={`${classes.row} ${classes.total} ${classes.line}`}>
        <Chip label={parseCurrency(total)} className={classes.chip} />
      </div>
      <div className={`${classes.row} ${classes.cashback}`}>
        <div>
          <Typography variant="inherit">Cashback</Typography>
        </div>
        <div>
          <Chip label={`${cashbackPercent}%`} className={classes.chip} />
          <Chip label={parseCurrency(cashbackTotal)} className={classes.chip} />
        </div>
      </div>
    </Box>
  );
};

export default Card;
