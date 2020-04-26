
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import TimerOutlined from '@material-ui/icons/TimerOutlined';
import TimerOff from '@material-ui/icons/TimerOff';
import Pomodoro from "../components/Pomodoro";
import EmailFilters from "../components/EmailFilters";

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
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: 'relative'
    },
    cardMedia: {
        paddingTop: "56.25%", // 16:9
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
        backgroundColor: 'black'
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

// basecamp needs to be referenced for this
const cards = [
    { id: 1, title: "Prefer email over teleconferencing.", url: "#", desc: 'Internal communication based on long-form writing, rather than a verbal tradition of meetings, speaking, and chatting, leads to a welcomed reduction in meetings, video conferences, calls, or other real-time opportunities to interrupt and be interrupted.' },
    { id: 2, title: "Speaking only helps who’s in the room, writing helps everyone.", url: "#", desc: "This includes people who couldn't make it, or future employees who join years from now." },
    { id: 3, title: "Five people in a room for an hour isn't a one hour meeting, it's a five hour meeting. Be mindful of the tradeoffs.", url: "#", desc: 'Ask politely to be exclused from a meeting in which you are not required.' },
    { id: 4, title: "Write at the right time.", url: "#", desc: "Sharing something at 5pm may keep someone at work longer..." }
];

export default function Productivity() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="lg">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="textPrimary"
                            gutterBottom
                        >
                            Pomodoro technique
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="textSecondary"
                            paragraph
                        >
                            The pomodoro method is a time management method.
                            Simply divide your workload in small tasks that can be
                            managed in short intervals, usually 25 minutes long.
                            Start any of your work sessions by making a list of the tasks
                            that you need to do and grab a timer or a watch to track the time.
                            At the end of each interval stand up for a short break or do a few
                            exercises.
                            Fun fact, the developer of the method called it pomodoro after the tomato-shaped
                            timer he used to track his work.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Pomodoro />
                            </Grid>
                        </div>
                    </Container>
                </div>
                <div className={classes.heroContent}>
                    <Container maxWidth="lg">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="textPrimary"
                            gutterBottom
                        >
                            Tackling meetings and emails
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="textSecondary"
                            paragraph
                        >
                            Drop a Few lines, don't forget to mention the rules are from basecamp
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card.id} xs={12} sm={6} md={6}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        title={card.title}
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.title}
                                        </Typography>
                                        <Typography>
                                            {card.desc}
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
                <div className={classes.heroContent}>
                    <Container maxWidth="lg">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="textPrimary"
                            gutterBottom
                        >
                            Efficient use of emails
                        </Typography>
                        <Typography
                            variant="h5"
                            align="center"
                            color="textSecondary"
                            paragraph
                        >
                            While the number of employees, who traditionally communicated via personal meetings or telephone but
                            are now forced to work from home, is rising, email is becoming more and more important. However, unless
                            email is used in moderation it can become a distraction. In this section we provide useful email filters
                            and tips to help you organise your email and only be notified of work related emails during your working hours.
                        </Typography>
                        <EmailFilters />
                    </Container>
                </div>
            </main>
        </React.Fragment>

    );
}
