
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
    { id: 1, title: "Prefer email over teleconferencing.", url: "https://basecamp.com/guides/how-we-communicate", desc: 'Internal communication based on long-form writing, rather than a verbal tradition of meetings, speaking, and chatting, leads to a welcomed reduction in meetings, video conferences, calls, or other real-time opportunities to interrupt and be interrupted.' },
    { id: 2, title: "Speaking only helps who’s in the room, writing helps everyone.", url: "https://basecamp.com/guides/how-we-communicate", desc: "This includes people who couldn't make it, or future employees who join years from now." },
    { id: 3, title: 'Ask politely to be exclused from a meeting in which you are not required.', url:"https://basecamp.com/guides/how-we-communicate", desc:"Five people in a room for an hour isn't a one hour meeting, it's a five hour meeting. Be mindful of the tradeoffs."},
    { id: 4, title: "Write at the right time.", url: "https://basecamp.com/guides/how-we-communicate", desc: "Sharing something at 5pm may keep someone at work longer. You may have some spare time on a Sunday afternoon to write something, but putting it out there on Sunday may pull people back into work on the weekends. Early Monday morning communication may be buried by other things. There may not be a perfect time, but there's certainly a wrong time. Keep that in mind when you hit send." }
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
                            Pomodoro method
                        </Typography>
                        <Typography
                            variant="h6"
                            align="center"
                            color="textSecondary"
                            paragraph
                        >
                            Achieving high productivity level is not always simple, especially for remote workers.
                            Every day our productivity takes a hit from various distractions like messages, emails,
                            chores that need to be done or even just our wandering mind. 
                            
                            The pomodoro method is here for the rescue! 
                        </Typography>
                        <Typography
                            variant="h6"
                            align="center"
                            color="textSecondary"
                            paragraph
                        >
                            The pomodoro method, first invented by Francesco Girillo, helps you manage your time.
                            It relies on the basic principle of dividing large tasks in smaller ones that can be 
                            managed in short intervals called pomodoro, usually 25 minutes long. Undertaking a 
                            small task, ensures ones' brain retains focus throughout the interval, and for that 
                            it is rewarded with a small break at the end of the pomodoro.

                            Fun fact, the developer of the method called it pomodoro after the tomato-shaped
                            timer he used to track his work.
                            
                        </Typography>
                        <Typography
                            variant="h6"
                            align="center"
                            color="textPrimary"
                            paragraph
                        >
                            Apply the pomodoro method
                        </Typography>
                        <Typography
                            variant="body1"
                            align="center"
                            color="textPrimary"
                            paragraph
                        >
                            <li><span>At the start of your work session note the goal for the day</span></li>
                            <li><span>Divide the work that needs to be accomplished in small distinct and managable tasks</span></li>
                            <li><span>Set a timer on your phone, on the oven or simply use our pomodoro timer </span></li>
                            <li><span>Once the pomodor is over take a break -- you earned it! </span></li>
                            <li><span>During the break you can stand up or stretch for a better physical health. </span></li>

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
                            Tackling meetings
                        </Typography>
                        <Typography
                            variant="h6"
                            align="center"
                            color="textSecondary"
                            paragraph
                        >
                            Check out our favourite guidelines from <a href="https://basecamp.com/guides/how-we-communicate">basecamp</a>, 
                            for effective comunication 

                            without the sacrifice of productivity. 
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
                                        <Typography variant="caption">
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
                            variant="h6"
                            align="center"
                            color="textSecondary"
                            paragraph
                        >
                            While the number of employees, who traditionally communicated via personal meetings or telephone but
                            are now forced to work from home, is rising, email is becoming more and more important. However, unless
                            email is used in moderation it can become a distraction. In this section we provide useful email filters
                            and tips to help you organise your email and only be notified of work related emails during your working hours.
                        </Typography>
                        <EmailFilters/>
                    </Container>
                </div>
            </main>
        </React.Fragment>

    );
}
