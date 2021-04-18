import { makeStyles } from '@material-ui/core';

// Styles
import { typography } from 'styles';

const styles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',

    '& > div': {
      width: 350,
      maxWidth: '90%'
    },

    [theme.breakpoints.down('md')]: {
      alignItems: 'center'
    }
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(4)
  },
  content: {
    display: 'flex'
  },
  footer: {
    display: 'flex',
    marginTop: theme.spacing(2),

    '& button': {
      fontFamily: typography.types.regular,
      fontWeight: 600,
      padding: 'unset',
      textTransform: 'unset'
    }
  },
  description: {
    color: theme.palette.grey[900],
    fontFamily: typography.types.light,
    fontSize: typography.font.medium,
    lineHeight: 1.2,

    '& > strong': {
      display: 'block',
      fontFamily: typography.types.regular,
      fontWeight: 900
    }
  }
}));

export default styles;
