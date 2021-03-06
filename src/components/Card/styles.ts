import { makeStyles } from '@material-ui/core/styles';
import { typography } from 'styles';

export default makeStyles((theme) => ({
  box: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    border: `solid 1px ${theme.palette.primary.main}`,
    borderRadius: 10,
    backgroundColor: theme.palette.background.paper,
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    color: theme.palette.grey[500],
    fontSize: typography.font.extraSmall,
    maxWidth: 340,
    transition: 'transform 0.8s',
    backfaceVisibility: 'hidden',

    '&:hover': {
      transform: 'perspective(1px) scale(1.03)'
    },

    [theme.breakpoints.up('xl')]: {
      maxWidth: 370
    }
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  status: {},
  chip: {
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.grey[600],
    fontWeight: 600
  },
  details: {
    marginBottom: 'unset',

    '& > span:first-child': {
      color: theme.palette.grey[900],
      fontWeight: 600
    }
  },
  total: {
    marginBottom: 'unset'
  },
  order: {
    '& > div': {
      display: 'flex',
      flexDirection: 'column',

      '& > span:first-child': {
        color: theme.palette.grey[500],
        fontWeight: 600
      }
    },

    '& > div:last-child': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  },
  line: {
    borderBottom: `solid 1px ${theme.palette.grey[200]}`,
    paddingBottom: theme.spacing(3)
  },
  cashback: {
    display: 'flex',
    flexDirection: 'column',

    '& > div > span:first-child': {
      color: theme.palette.grey[900],
      fontWeight: 600
    },

    '& > div:last-child': {
      display: 'flex',
      marginTop: theme.spacing(1)
    },

    '& .MuiChip-root': {
      marginRight: theme.spacing(1)
    }
  }
}));
