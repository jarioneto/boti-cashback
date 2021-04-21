import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  list: {
    display: 'grid',
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: theme.spacing(6),

    '& > div': {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gridGap: 40
    },

    [theme.breakpoints.down('sm')]: {
      '& > div': {
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))'
      }
    },

    [theme.breakpoints.up('lg')]: {
      '& > div': {
        gridGap: 60
      }
    }
  }
}));

export default styles;
