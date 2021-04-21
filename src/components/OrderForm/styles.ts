import { makeStyles } from '@material-ui/core';

// Styles
import { typography } from 'styles';

const styles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '100%',
    padding: '10px 30px',

    '& > svg': {
      width: 65,
      height: 50
    }
  },
  formGroup: {
    display: 'flex',
    marginTop: 20,
    marginBottom: 20,

    '& > label': {
      color: theme.palette.grey[600],
      marginBottom: 10
    },

    '& input': {
      height: 9
    },

    '& .MuiFormControl-root': {
      maxWidth: '100%'
    }
  },
  title: {
    color: theme.palette.grey[900],
    fontSize: typography.font.large - 5,
    fontWeight: 600,
    lineHeight: theme.typography.pxToRem(28)
  },
  box: {
    marginTop: theme.spacing(8),

    '& > button': {
      textTransform: 'unset',
      fontFamily: typography.types.semiBold
    },

    '& > button[type="submit"]': {
      color: '#FFF',
      marginRight: theme.spacing(2)
    }
  },
  button: {
    position: 'fixed',
    bottom: 20,
    right: 20,
    color: 'white'
  }
}));

export default styles;
