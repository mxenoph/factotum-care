import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import PlantsImage from '../../../images/plants.jpg';
import KidsImage from "../../../images/yoga_banner.jpg"
// import CoupleImage from "../../../images/couple.jpg"


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  mainPage: {
    margin: "40px auto",
    },
}));

const mainFeaturedPost = {
  title: "Manage your surroundings",
  description: "Tips on maintaining physical and mental health",
};

const featuredPosts = [
  {
    title: "Find the best spot",
    // url: 'https://www.webmd.com/balance/stress-management/stress-relief-breathing-techniques#1',
    description:
    "Find the best spot and stick with it. " +
    "It's important to have a constant work environment; " +
    "this eliminates the interruptions and helps our mind focus on the work." +
    "Ideally you will find a spot away from your bed and television, " +
    "and you'll be surrounded by plants.",
    image: PlantsImage,
    imageText: "Plants",
  },
  {
    title: "Kids and harmony",
    url: "https://scratch.mit.edu/",
    isKids: "true",
    description:
    "You might be working in a house full of kids. " +
    "This sounds pretty challenging, but stay calm; we got your back! " +
    "You can make a schedule for your kids, with some tasks oriented for them " +
    "together with often breaks that accompany your breaks. " +
    "An example for a task would be to use some online educational platform " +
    " (e.g. Scratch) to build a game by programming. It's important to take " +
    "breaks together so that they follow your example and you all 'work' in harmony.",
    image: KidsImage,
    imageText: "Kids",
  },
  {
    title: "(Work) Partners",
    // url: "https://scratch.mit.edu/",
    description:
    "Do you and your partner have to work both from home? " +
    "Here are some tips we have for you. Decide together what time " +
    "you start and finish work, and make sure your meetings are scheduled in " +
    "differrent times, to have a better internet connection and less noise " +
    "during the meetings. Don't forget you're lucky to have each other during " +
    "the confinement and take your lunch breaks together, away from the laptop's screen.",
    image: "./couple.png",
    imageText: "Couple",
  },
];

export default function MentalHealth() {
  const classes = useStyles();

  return (
    <Fragment>
      <Navigation />
      <CssBaseline />
      <Container maxWidth="lg" className={classes.mainPage}>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container justify={"space-evenly"} spacing={3}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Footer />
    </Fragment>
  );
}
