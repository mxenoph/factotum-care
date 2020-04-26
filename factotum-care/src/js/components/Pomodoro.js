import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import TimerOutlined from '@material-ui/icons/TimerOutlined';
import TimerOff from '@material-ui/icons/TimerOff';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class Timer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
            >
                {this.props.time}:{this.props.seconds}
            </Typography>
            

        );
    }
}

class Session extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Button variant="outlined" color="primary" onClick={this.props.session}>
                 session reset
            </Button>
        );
    }
}

class Start extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Button variant="outlined" color="primary" startIcon={<TimerOutlined />} onClick={this.props.startCountDown}>
                Start a pomodoro
            </Button>
        );
    }
}

class Stop extends React.Component {
    render() {
        return (
            <Button variant="outlined" color="primary" startIcon={<TimerOff />} onClick={this.props.stopCountDown}>
                Stop
            </Button>
        );
    }
}



class Pomodoro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 25,
            seconds: '00',
        }
        // this.intervalHandle;
        // this.secondsRemaining;
        this.session = this.session.bind(this);
        this.startCountDown = this.startCountDown.bind(this);
        this.stopCountDown = this.stopCountDown.bind(this);
        this.tick = this.tick.bind(this);

    }

    tick() {

        var min = Math.floor(this.secondsRemaining / 60);
        var sec = this.secondsRemaining - (min * 60);

        this.setState({
            time: min,
            seconds: sec,
        })

        if (sec < 10) {
            this.setState({
                seconds: "0" + this.state.seconds,
            })

        }

        if (min < 10) {
            this.setState({
                time: "0" + min,
            })

        }

        if (min === 0 & sec === 0) {
            clearInterval(this.intervalHandle);
        }


        this.secondsRemaining--
    }


    startCountDown() {
        this.intervalHandle = setInterval(this.tick, 1000);
        let time = this.state.time;
        this.secondsRemaining = time * 60;
    }

    stopCountDown() {
        clearInterval(this.intervalHandle);
    }

    session() {
        this.setState({
            time: 25,
            seconds: '00'
        })
    }
    
    render() {

        return (
            <React.Fragment>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Start startCountDown={this.startCountDown} />
                        </Grid>
                        <Grid item>
                            <Stop stopCountDown={this.stopCountDown} />
                        </Grid>
                        <Grid item>
                            <Session session={this.session} />
                        </Grid>
                        <Grid item>
                            <Timer time={this.state.time} seconds={this.state.seconds} />
                        </Grid>
                    </Grid>

            </React.Fragment>
        );

    }
}



export default Pomodoro;