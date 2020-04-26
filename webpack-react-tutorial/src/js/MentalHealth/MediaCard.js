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

const useStyles = makeStyles({
  media: {
    width: "60%",
    height: 340,
    margin: "5px auto"
  },
  actionArea: {
    height : "500px"
  }
});

export default function MediaCard(data) {
  const classes = useStyles();
  console.log(data.data.image);

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.actionArea}>
        <CardMedia
          className={classes.media}
          image={data.data.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              {data.data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {data.data.description}
          </Typography>
        </CardContent>
      </CardActionArea>
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