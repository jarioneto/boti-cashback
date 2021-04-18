import { makeStyles } from '@material-ui/core';

// Assets
import loginBackground from 'assets/images/login-background.jpg';

// Styles
import { typography } from 'styles';

const styles = makeStyles((theme) => ({
  container: {
    height: '100%'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    minHeight: '100%',
    padding: '10% 8% 25px',
    background: `url(${loginBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
  title: {
    color: theme.palette.grey[900],
    fontSize: typography.font.large,
    fontWeight: 100
  },
  subtitle: {
    display: 'inline-flex',
    color: theme.palette.grey[900],
    fontFamily: typography.types.light,
    fontSize: typography.font.extraLarge,
    lineHeight: 1.2,

    '& > strong': {
      display: 'block',
      fontFamily: typography.types.regular,
      fontWeight: 900
    }
  }
}));

export default styles;
