import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import MediaCard from './MediaCard';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
        width : "50%"
},

});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;


  return (
    <Grid item className={classes.cardDetails}>
    <MediaCard data={post}></MediaCard>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};