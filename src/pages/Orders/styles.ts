import { makeStyles } from '@material-ui/core';

// Styles
import { typography } from 'styles';

const styles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 10%'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(6),

    [theme.breakpoints.down('sm')]: {
      '& > div:first-child': {
        display: 'none'
      }
    }
  },
  title: {
    color: theme.palette.grey[900],
    fontSize: typography.font.large,
    fontWeight: 600
  },
  subtitle: {
    color: theme.palette.grey[500],
    fontSize: typography.font.small
  }
}));

export default styles;
