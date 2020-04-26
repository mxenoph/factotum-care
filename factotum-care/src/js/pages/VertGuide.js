import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import FirstImage from '../../images/workplace1.jpg';
import SecondImage from "../../images/workstation_side.jpg"


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "50%",
    margin: "36px auto",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
    textAlign: "center",
  },
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  img: {
    margin: "auto",
    display: "block",
  },
}));
function getSteps() {
  return ["Step1", "Step 2", "Step 3", "Step 4"];
}
function getStepContent(step) {
  switch (step) {
    case 0:
      return `Adjust the height of your chair so that your arms rest at a natural angle on the desk and your back is straight as if an invisible string was pulling the top of your head towards the ceiling.`;
    case 1:
      return "If your feet do not reach the ground use a foot rest.";
    case 2:
      return `Place the keyboard and mouse 10cm from table edge.`;
    case 3:
      return `Make sure you have a good intenet connection. Losing internet access can be frustrating both for you and your teamates. For better results place the router somewhere high and away from metal objects.`;
    default:
      return "Unknown step";
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div>
      <Navigation />
      <Stepper
        className={classes.root}
        activeStep={activeStep}
        orientation="vertical"
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Grid
                container
                spacing={2}
                // direction="column"
              >
                <Grid item xs={6}>
                  <img
                    style={{ width: "100%" }}
                    className={classes.img}
                    alt="complex"
                    src={FirstImage}
                  />
                </Grid>
                <Grid item xs={6}>
                  <img
                    style={{ width: "100%" }}
                    className={classes.img}
                    alt="complex"
                    src= {SecondImage}
                  />
                </Grid>
              </Grid>
              <Typography className={classes.instruction}>
                {getStepContent(index)}
              </Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>
            All steps completed. Wish you a productive day!
          </Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
      <Footer />
    </div>
  );
}