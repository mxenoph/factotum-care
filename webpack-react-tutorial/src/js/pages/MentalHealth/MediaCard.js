import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
      height: "100%"
  },
  media: {
    width: "60%",
    height: 340,
    margin: "5px auto"
  },
  actionArea: {
    height : "500px"
  },
  actionAreaYoga : {
    height : "350px"
  },
  titleYoga : {
    textAlign : "center",
    padding : "30px"
  }
});

export default function MediaCard(data) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      
        <CardContent>
          <Grid container>
        <CardMedia 
         component = {data.data.component}
          className={data.data.isYoga? classes.actionAreaYoga :classes.media}
          image={data.data.image}
          src = {data.data.url}
        />
        </Grid>
          <Typography className= {data.data.isYoga? classes.titleYoga : ""}gutterBottom variant="h5" component="h2">
              {data.data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {data.data.description}
          </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={data.data.url} target="_blank">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
MediaCard.propTypes = {
  data: PropTypes.object,
};