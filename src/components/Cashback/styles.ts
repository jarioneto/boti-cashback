import { makeStyles } from '@material-ui/core';

// Styles
import { typography } from 'styles';

const styles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',

    '& > svg': {
      height: 50,
      marginRight: theme.spacing(1.5)
    }
  },
  title: {
    color: theme.palette.grey[900],
    fontSize: typography.font.large - 5,
    fontWeight: 600,
    lineHeight: theme.typography.pxToRem(28)
  },
  subtitle: {
    color: theme.palette.grey[500],
    fontSize: typography.font.extraSmall
  }
}));

export default styles;
