import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  mainPage : {
    marginTop: theme.spacing(5),

  }
}));


const mainFeaturedPost = {
  title: 'Physical and Mental Health',
  image: './meditation.png',
  description:
      'Tips on maintaining physical and mental health'
};

const featuredPosts = [
  {
    title: 'Take Deep Breaths',
    url: 'https://www.webmd.com/balance/stress-management/stress-relief-breathing-techniques#1',
    description:
      'Many breathing exercises take only a few minutes. When you have more time, you can do them for 10 minutes or more to get even greater benefits.',
    image: './physical_1.jpg',
    imageText: 'DeepBreaths',
  },
  {
    title: 'Stand Up and Walk',
    url: 'http://www.euro.who.int/en/health-topics/health-emergencies/coronavirus-covid-19/novel-coronavirus-2019-ncov-technical-guidance/stay-physically-active-during-self-quarantine',
    description:
      'Even in small spaces, walking around or walking on the spot, can help you remain active. If you have a call, stand or walk around your home while you speak, instead of sitting down. ',
      image: './physical_mental_walking.jpg',
      imageText: 'Image Text',
  },

];

export default function MentalHealth() {
  const classes = useStyles();

  return (
    <Fragment>
     <Navigation/>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.mainPage}>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container justify={"space-evenly"} spacing={3} >
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
      
          </Grid>
        </main>
      </Container>
      <Footer/>
    </Fragment>
  );
}