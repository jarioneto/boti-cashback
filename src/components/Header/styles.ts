import { makeStyles } from '@material-ui/core/styles';

// Styles
import { typography } from 'styles';

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow:
      '0px 0px 0px -1px rgba(0,0,0,0.2), 0px -1px 5px 0px rgba(0,0,0,0.14), 0px 1px 6px 0px rgba(0,0,0,0.12)',
    backgroundColor: theme.palette.background.paper
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  box: {
    display: 'flex',
    alignItems: 'center',

    '& > svg': {
      height: 30
    }
  },
  title: {
    flexGrow: 1,
    display: 'inline-flex',
    color: theme.palette.grey[900],
    fontFamily: typography.types.regular,
    lineHeight: 1.2,
    marginLeft: theme.spacing(1),

    '& > strong': {
      display: 'block',
      fontFamily: typography.types.regular,
      fontWeight: 900
    }
  }
}));
