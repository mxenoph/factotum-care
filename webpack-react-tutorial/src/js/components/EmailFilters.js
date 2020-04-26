import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Email filters</Typography>
          <Typography className={classes.secondaryHeading}>At the moment we only provide information on Gmail filter creation</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography
              variant="body1"
              align="left"
              color="textPrimary"
              paragraph
          >
              <li><span>Go to your Gmail</span></li>
              <li><span>Navigate to Settings</span></li>
              <li><span>Select Filters and Blocked Addresses and then Create new filter</span></li>
              <li><span>Form a filter to distinguish emails only sent to you by providing the following to the To fields: me AND -*</span></li>
              <li><span>Select Create filter, then OK and select Always mark it as important and categorize as Primary.</span></li>
              <li><span>Confirm the filter creation</span></li>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Synchronize your email at the beginning of your pomodoro</Typography>
          <Typography className={classes.secondaryHeading}>
             At the moment we only provide steps to alter the syncronization interval for Apple Mail
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Container maxWidth="lg">
          <Typography
              variant="body1"
              align="left"
              color="textPrimary"
              paragraph
          >
              <li><span>Go to your Apple Mail</span></li>
              <li><span>Navigate to Prefernces from the Menu</span></li>
              <li><span>Under general set "Check for new messages" to every 30 minutes</span></li>
          </Typography>
          <Typography
              variant="body1"
              align="left"
              color="textPrimary"
              paragraph
          >
              The steps can be taken just one time at the start of your work day and provided you
              practise pomodoro, you will only receive emails at the end of your pomodoro break.

          </Typography>
          </Container>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
