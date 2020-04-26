import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.1.md';
import post3 from './blog-post.1.md';

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
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: './physical_1.jpg',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
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