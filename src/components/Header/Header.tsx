import React from 'react';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';

// Third party
import { useHistory } from 'react-router-dom';

// Assets
import { ReactComponent as Coin } from 'assets/images/coin.svg';

// Utils
import { destroySession } from 'utils/authentication';

// Styles
import useStyles from './styles';

const Header: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const logout = () => {
    destroySession();
    history.push('/');
  };

  return (
    <AppBar classes={{ root: classes.root }} position="static">
      <Toolbar className={classes.toolbar}>
        <Box className={classes.box}>
          <Coin />
          <Typography variant="h6" className={classes.title}>
            Boti<strong>Cashback</strong>
          </Typography>
        </Box>
        <IconButton edge="start" color="inherit" onClick={logout}>
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
