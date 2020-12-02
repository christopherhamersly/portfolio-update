
/////////////  DEPENDENCIES BEGIN /////////////

import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat, faMountain, faBug, faMapMarkerAlt, faBiking } from '@fortawesome/free-solid-svg-icons'
import Media from 'react-media'

/////////////  DEPENDENCIES END /////////////




/////////////  STYLING BEGIN /////////////

const useStyles = makeStyles((theme) => ({

  /////////////// LARGE SCREEN BEGIN /////////////
  portfolioLarge: {
    backgroundColor: '#77d3f7',
    padding: theme.spacing(6),
    textAlign: "center"
  },
  rootLarge: {
    width: '100%',
  },
  headingLarge: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    padding: 30
  },
  languagesLarge: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
    paddingRight: 30,
    marginLeft: 30
  },
  avatar1Large: {
    marginLeft: 30,
    height: 30,
    color: '#46ddeb',
    fontSize: 40,
    marginTop: 30
  },
  avatar2Large: {
    marginLeft: 30,
    height: 30,
    color: '#46ddeb',
    fontSize: 40,
    marginTop: 30
  },
  avatar3Large: {
    marginLeft: 30,
    height: 30,
    color: '#46ddeb',
    fontSize: 40,
    marginTop: 30
  },
  avatar4Large: {
    marginLeft: 30,
    height: 30,
    color: '#46ddeb',
    fontSize: 40,
    marginTop: 30
  },
  avatar5Large: {
    marginLeft: 30,
    height: 30,
    color: '#46ddeb',
    fontSize: 40,
    marginTop: 30
  },
  linkLarge: {
    marginRight: 30,
    color: "#080807",
    textDecoration: 'none',
    paddingTop: 30
  },
  /////////////// MEDIUM SCREEN BEGIN /////////////
  portfolioMedium: {
    backgroundColor: '#77d3f7',
    padding: theme.spacing(6),
    textAlign: "center"
  },
  rootMedium: {
    width: '100%',
  },
  headingMedium: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    padding: 30
  },
  languagesMedium: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
    paddingRight: 30,
    marginLeft: 30
  },
  avatar1Medium: {
    marginLeft: 30,
    height: 30,
    color: '#46ddeb',
    fontSize: 40,
    marginTop: 30
  },
  avatar2Medium: {
    marginLeft: 30,
    height: 30,
    color: '#46ddeb',
    fontSize: 40,
    marginTop: 30
  },
  avatar3Medium: {
    marginLeft: 30,
    height: 30,
    color: '#46ddeb',
    fontSize: 40,
    marginTop: 30
  },
  avatar4Medium: {
    marginLeft: 30,
    height: 30,
    color: '#46ddeb',
    fontSize: 40,
    marginTop: 30
  },
  avatar5Medium: {
    marginLeft: 30,
    height: 30,
    color: '#46ddeb',
    fontSize: 40,
    marginTop: 30
  },
  linkMedium: {
    marginRight: 30,
    color: "#080807",
    textDecoration: 'none',
    paddingTop: 30
  },
  /////////////// SMALL SCREEN BEGIN /////////////
  portfolioSmall: {
    backgroundColor: '#77d3f7',
    padding: theme.spacing(3),
    textAlign: 'center'
  },
  rootSmall: {
    width: '100%',
  },
  headingSmall: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
    padding: 30
  },
  languagesSmall: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
    paddingRight: 30,
    marginLeft: 30
  },
  avatar1Small: {
    marginLeft: 30,
    height: 30,
    color: '#46ddeb',
    fontSize: 40,
    marginTop: 30
  },
  avatar2Small: {
    marginLeft: 30,
    height: 30,
    color: '#46ddeb',
    fontSize: 40,
    marginTop: 30
  },
  avatar3Small: {
    marginLeft: 30,
    height: 30,
    color: '#46ddeb',
    fontSize: 40,
    marginTop: 30
  },
  avatar4Small: {
    marginLeft: 30,
    height: 30,
    color: '#46ddeb',
    fontSize: 40,
    marginTop: 30
  },
  avatar5Small: {
    marginLeft: 30,
    height: 30,
    color: '#46ddeb',
    fontSize: 40,
    marginTop: 30
  },
  linkSmall: {
    marginRight: 30,
    color: "#080807",
    textDecoration: 'none',
    paddingTop: 30
  }
}));

/////////////  STYLING ENDS /////////////

function Portfolio() {
  const classes = useStyles();
  return (
    <>
      <Media queries={{
        small: "(max-width: 599px)",
        medium: "(min-width: 600px) and (max-width: 1199px)",
        large: "(min-width: 1200px)"
      }}>
        {matches => (
          <div>
            {matches.large &&
              <div className={classes.rootLarge}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <FontAwesomeIcon className={classes.avatar1Large} icon={faBiking} />
                    {/* <Avatar aria-label="icon" className={classes.avatar}>
              JP
          </Avatar> */}
                    <br></br>
                    <br></br>
                    <Typography className={classes.headingLarge}>Judkins Park</Typography>


                  </AccordionSummary>

                  <AccordionDetails>
                    <Typography className={classes.languagesLarge}> Javascript
      <br></br>React
      </Typography>

                    <Typography variant="body1" color="textSecondary" component="p">
                      In the process of creating a user friendly website for Judkins Park in Seattle, WA.
        <br></br>
                      <br></br>
                      <a href="https://github.com/christopherhamersly/judkins" target="blank" className={classes.linkLarge}> GitHub </a>
                    </Typography>
                    <br></br>
                    <Typography className={classes.linkLarge}>

                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <FontAwesomeIcon className={classes.avatar2Large} icon={faMapMarkerAlt} />
                    {/* <Avatar aria-label="recipe" className={classes.avatar}>
              TC
          </Avatar> */}
                    <br></br>
                    <br></br>
                    <Typography className={classes.headingLarge}>Track Chat</Typography>


                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.languagesLarge}> Javascript       <br></br>           React-Native</Typography>

                    <Typography variant="body1" color="textSecondary" component="p">
                      This app was designed for familes, and can be used to safely track young children location to ensure safety.  The app will automatically update each of the users location every three seconds while using the app.  The app is also designed with an SOS button, that will emit an emergency broadcast, that will broadcast the users name, and location of the emergency.
        </Typography>
                    <br></br>
                    <Typography className={classes.linkLarge}>
                      <a href="https://github.com/christopherhamersly/trackChat" target="blank"> GitHub </a>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <FontAwesomeIcon className={classes.avatar3Large} icon={faBug} />
                    {/* <Avatar aria-label="icon" className={classes.avatar}>
              BB
          </Avatar> */}
                    <br></br>
                    <br></br>
                    <Typography className={classes.headingLarge}>Brain Bugs</Typography>


                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.languagesLarge}> Javascript
      <br></br>Blessed
      <br></br> Node.js</Typography>

                    <Typography variant="body1" color="textSecondary" component="p">
                      Worked in a team of four to create a multiplayer trivia based game with chat functionality.
        <br></br>
                      <br></br>
                      <a href="https://github.com/christopherhamersly/midterm-project" target="blank" className={classes.linkLarge}> GitHub </a>
                      <a href="https://brain-bugs.herokuapp.com/" target="blank" className={classes.linkLarge}> Heroku </a>
                    </Typography>
                    <br></br>
                    <Typography className={classes.linkLarge}>

                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <FontAwesomeIcon className={classes.avatar4Large} icon={faMountain} />
                    {/* <Avatar aria-label="icon" className={classes.avatar}>
              WW
          </Avatar> */}
                    <br></br>
                    <br></br>
                    <Typography className={classes.headingLarge}>Weekend Warrior</Typography>


                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.languagesLarge}> Javascript
      <br></br>EJS
      </Typography>

                    <Typography variant="body1" color="textSecondary" component="p">
                      Worked in a team of four to create an app that can show you how to spend your weekend.
        <br></br>
                      <br></br>
                      <a href="https://github.com/christopherhamersly/Code-301-Final-Project" target="blank" className={classes.linkLarge}> GitHub </a>
                      <a href="https://weekend-warrior-app.herokuapp.com/" target="blank" className={classes.linkLarge}> Heroku </a>
                    </Typography>
                    <br></br>
                    <Typography className={classes.linkLarge}>

                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <FontAwesomeIcon className={classes.avatar5Large} icon={faCat} />
                    {/* <Avatar aria-label="icon" className={classes.avatar}>
              MM
          </Avatar> */}
                    <br></br>
                    <br></br>
                    <Typography className={classes.headingLarge}>Meow Match</Typography>


                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.languagesLarge}> Javascript
      <br></br>HTML
      <br></br> CSS</Typography>

                    <Typography variant="body1" color="textSecondary" component="p">
                      Created a dating app for lonely housecats diring the pandemic
        <br></br>
                      <br></br>
                      <a href="https://github.com/christopherhamersly/meow-match" target="blank" className={classes.linkLarge}> GitHub </a>
                    </Typography>
                    <br></br>
                    <Typography className={classes.linkLarge}>

                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>}
              {matches.medium &&
              <div className={classes.rootMedium}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <FontAwesomeIcon className={classes.avatar1Medium} icon={faBiking} />
                    {/* <Avatar aria-label="icon" className={classes.avatar}>
              JP
          </Avatar> */}
                    <br></br>
                    <br></br>
                    <Typography className={classes.headingMedium}>Judkins Park</Typography>


                  </AccordionSummary>

                  <AccordionDetails>
                    <Typography className={classes.languagesMedium}> Javascript
      <br></br>React
      </Typography>

                    <Typography variant="body1" color="textSecondary" component="p">
                      In the process of creating a user friendly website for Judkins Park in Seattle, WA.
        <br></br>
                      <br></br>
                      <a href="https://github.com/christopherhamersly/judkins" target="blank" className={classes.linkMedium}> GitHub </a>
                    </Typography>
                    <br></br>
                    <Typography className={classes.linkMedium}>

                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <FontAwesomeIcon className={classes.avatar2Medium} icon={faMapMarkerAlt} />
                    {/* <Avatar aria-label="recipe" className={classes.avatar}>
              TC
          </Avatar> */}
                    <br></br>
                    <br></br>
                    <Typography className={classes.headingMedium}>Track Chat</Typography>


                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.languagesMedium}> Javascript       <br></br>           React-Native</Typography>

                    <Typography variant="body1" color="textSecondary" component="p">
                      This app was designed for familes, and can be used to safely track young children location to ensure safety.  The app will automatically update each of the users location every three seconds while using the app.  The app is also designed with an SOS button, that will emit an emergency broadcast, that will broadcast the users name, and location of the emergency.
        </Typography>
                    <br></br>
                    <Typography className={classes.linkMedium}>
                      <a href="https://github.com/christopherhamersly/trackChat" target="blank"> GitHub </a>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <FontAwesomeIcon className={classes.avatar3Medium} icon={faBug} />
                    {/* <Avatar aria-label="icon" className={classes.avatar}>
              BB
          </Avatar> */}
                    <br></br>
                    <br></br>
                    <Typography className={classes.headingMedium}>Brain Bugs</Typography>


                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.languagesMedium}> Javascript
      <br></br>Blessed
      <br></br> Node.js</Typography>

                    <Typography variant="body1" color="textSecondary" component="p">
                      Worked in a team of four to create a multiplayer trivia based game with chat functionality.
        <br></br>
                      <br></br>
                      <a href="https://github.com/christopherhamersly/midterm-project" target="blank" className={classes.linkMedium}> GitHub </a>
                      <a href="https://brain-bugs.herokuapp.com/" target="blank" className={classes.linkMedium}> Heroku </a>
                    </Typography>
                    <br></br>
                    <Typography className={classes.linkMedium}>

                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <FontAwesomeIcon className={classes.avatar4Medium} icon={faMountain} />
                    {/* <Avatar aria-label="icon" className={classes.avatar}>
              WW
          </Avatar> */}
                    <br></br>
                    <br></br>
                    <Typography className={classes.headingMedium}>Weekend Warrior</Typography>


                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.languagesMedium}> Javascript
      <br></br>EJS
      </Typography>

                    <Typography variant="body1" color="textSecondary" component="p">
                      Worked in a team of four to create an app that can show you how to spend your weekend.
        <br></br>
                      <br></br>
                      <a href="https://github.com/christopherhamersly/Code-301-Final-Project" target="blank" className={classes.linkMedium}> GitHub </a>
                      <a href="https://weekend-warrior-app.herokuapp.com/" target="blank" className={classes.linkMedium}> Heroku </a>
                    </Typography>
                    <br></br>
                    <Typography className={classes.linkMedium}>

                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <FontAwesomeIcon className={classes.avatar5Medium} icon={faCat} />
                    {/* <Avatar aria-label="icon" className={classes.avatar}>
              MM
          </Avatar> */}
                    <br></br>
                    <br></br>
                    <Typography className={classes.headingMedium}>Meow Match</Typography>


                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.languagesMedium}> Javascript
      <br></br>HTML
      <br></br> CSS</Typography>

                    <Typography variant="body1" color="textSecondary" component="p">
                      Created a dating app for lonely housecats diring the pandemic
        <br></br>
                      <br></br>
                      <a href="https://github.com/christopherhamersly/meow-match" target="blank" className={classes.linkMedium}> GitHub </a>
                    </Typography>
                    <br></br>
                    <Typography className={classes.linkMedium}>

                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>}
              {matches.small &&
              <div className={classes.rootSmall}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <FontAwesomeIcon className={classes.avatar1Small} icon={faBiking} />
                    {/* <Avatar aria-label="icon" className={classes.avatar}>
              JP
          </Avatar> */}
                    <br></br>
                    <br></br>
                    <Typography className={classes.headingSmall}>Judkins Park</Typography>


                  </AccordionSummary>

                  <AccordionDetails>
                    <Typography className={classes.languagesSmall}> Javascript
      <br></br>React
      </Typography>

                    <Typography variant="body1" color="textSecondary" component="p">
                      In the process of creating a user friendly website for Judkins Park in Seattle, WA.
        <br></br>
                      <br></br>
                      <a href="https://github.com/christopherhamersly/judkins" target="blank" className={classes.linkSmall}> GitHub </a>
                    </Typography>
                    <br></br>
                    <Typography className={classes.linkSmall}>

                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <FontAwesomeIcon className={classes.avatar2Small} icon={faMapMarkerAlt} />
                    {/* <Avatar aria-label="recipe" className={classes.avatar}>
              TC
          </Avatar> */}
                    <br></br>
                    <br></br>
                    <Typography className={classes.headingSmall}>Track Chat</Typography>


                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.languagesSmall}> Javascript       <br></br>           React-Native</Typography>

                    <Typography variant="body1" color="textSecondary" component="p">
                      This app was designed for familes, and can be used to safely track young children location to ensure safety.  The app will automatically update each of the users location every three seconds while using the app.  The app is also designed with an SOS button, that will emit an emergency broadcast, that will broadcast the users name, and location of the emergency.
        </Typography>
                    <br></br>
                    <Typography className={classes.linkSmall}>
                      <a href="https://github.com/christopherhamersly/trackChat" target="blank"> GitHub </a>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <FontAwesomeIcon className={classes.avatar3Small} icon={faBug} />
                    {/* <Avatar aria-label="icon" className={classes.avatar}>
              BB
          </Avatar> */}
                    <br></br>
                    <br></br>
                    <Typography className={classes.headingSmall}>Brain Bugs</Typography>


                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.languagesSmall}> Javascript
      <br></br>Blessed
      <br></br> Node.js</Typography>

                    <Typography variant="body1" color="textSecondary" component="p">
                      Worked in a team of four to create a multiplayer trivia based game with chat functionality.
        <br></br>
                      <br></br>
                      <a href="https://github.com/christopherhamersly/midterm-project" target="blank" className={classes.linkSmall}> GitHub </a>
                      <a href="https://brain-bugs.herokuapp.com/" target="blank" className={classes.linkSmall}> Heroku </a>
                    </Typography>
                    <br></br>
                    <Typography className={classes.linkSmall}>

                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <FontAwesomeIcon className={classes.avatar4Small} icon={faMountain} />
                    {/* <Avatar aria-label="icon" className={classes.avatar}>
              WW
          </Avatar> */}
                    <br></br>
                    <br></br>
                    <Typography className={classes.headingSmall}>Weekend Warrior</Typography>


                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.languagesSmall}> Javascript
      <br></br>EJS
      </Typography>

                    <Typography variant="body1" color="textSecondary" component="p">
                      Worked in a team of four to create an app that can show you how to spend your weekend.
        <br></br>
                      <br></br>
                      <a href="https://github.com/christopherhamersly/Code-301-Final-Project" target="blank" className={classes.linkSmall}> GitHub </a>
                      <a href="https://weekend-warrior-app.herokuapp.com/" target="blank" className={classes.linkSmall}> Heroku </a>
                    </Typography>
                    <br></br>
                    <Typography className={classes.linkSmall}>

                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <FontAwesomeIcon className={classes.avatar5Small} icon={faCat} />
                    {/* <Avatar aria-label="icon" className={classes.avatar}>
              MM
          </Avatar> */}
                    <br></br>
                    <br></br>
                    <Typography className={classes.headingSmall}>Meow Match</Typography>


                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className={classes.languagesSmall}> Javascript
      <br></br>HTML
      <br></br> CSS</Typography>

                    <Typography variant="body1" color="textSecondary" component="p">
                      Created a dating app for lonely housecats diring the pandemic
        <br></br>
                      <br></br>
                      <a href="https://github.com/christopherhamersly/meow-match" target="blank" className={classes.linkSmall}> GitHub </a>
                    </Typography>
                    <br></br>
                    <Typography className={classes.linkSmall}>

                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>}
          </div>
        )}
      </Media>
    </>
  )
}

export default Portfolio

