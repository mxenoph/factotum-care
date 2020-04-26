import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import MeditationImage from '../../../images/workplace1.jpg';
import BreathImage from "../../../images/physical_mental_rotate.jpg"
import WalkingImage from "../../../images/workstation_side.jpg"


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
    {id:1,title:"Workstation Assesment", url:"/workstation", image:WalkingImage,description: "Is my work station set up correctly? What is the importance of an organised work station?"},
    {id:2,title:"Physical and Mental Health", url:"/mental", image:BreathImage, description: "Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act."},
    {id:3,title:"Productivity Booster", url:"/productivity", image:BreathImage, description: "Ways to boost your productivity!"},
    {id:4,title:"Manage your surroundings", url:"/surroundings", image:MeditationImage,  description: "Take a look around you. Make some changes!" }
];


export default function HomeMain() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="lg">
             
            
            <Typography variant="h5" align="left" color="textSecondary" paragraph>
            This is a collection of resources
            to help you tackle teleworking-related challenges
            </Typography>
            <Typography variant="h5" align="left" color="textSecondary" paragraph>
            To stay safe we work from home. However, before the COVID-19 pandemic remote work was possible for only few professionals. The vast majority of the workforce has not been trained on assessing its workstation and often neglects how vital it is. 
            Impromptu workstations and the distractions we face at home pose challenges for our health, our efficiency and our productivity.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title={card.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {card.title}
                    </Typography>
                    <Typography>
                        {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href={card.url} size="small" color="primary">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}