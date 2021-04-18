import { makeStyles } from '@material-ui/core';

// Styles
import { typography } from 'styles';

const styles = makeStyles((theme) => ({
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
  }
}));

export default styles;
