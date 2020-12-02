import React from 'react';
import { NavLink, Link, Switch, Route } from 'react-router-dom';
// import Portfolio from '../portfolio/portfolio.js';
// import Home from '../home/home.js';
// import Form from '../form/form.js';
// import About from '../about/about.js';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Media from 'react-media';
// import WhatshotIcon from '@material-ui/icons/Whatshot'
// import ContactMailIcon from '@material-ui/icons/ContactMail';
// import ArtTrackIcon from '@material-ui/icons/ArtTrack';
// import HomeIcon from '@material-ui/icons/Home';
// import InfoIcon from '@material-ui/icons/Info';
// import BookIcon from '@material-ui/icons/Book';
// import { NonIdealState } from '@blueprintjs/core';
// import RNMaterialLetterIcon from 'react-native-material-letter-icon';

const useStyles = makeStyles((theme) => ({
  headerLarge: {
    backgroundColor: '#eee',
    padding: theme.spacing(6),
    // textAlign: "center"
  },
  linkLarge: {
    color: '#91808b',
    // padding: theme.spacing(4),
    marginBottom: 120,
    textDecoration: 'none',
    fontFamily: 'helvetica',
    fontSize: '40%',
    align: 'right',
    padding: 15
  },
  iconLarge: {
    flexDirection: 'row',
    color: '#B2FFD6',
    fontSize: 50,
    // paddingLeft: 60
    // margin: 30
  },
  headerMedium: {
    backgroundColor: '#eee',
    padding: theme.spacing(4),
    // textAlign: "center"
  },
  linkMedium: {
    color: '#61595e',
    // padding: theme.spacing(4),
    marginBottom: 120,
    textDecoration: 'none',
    fontFamily: 'helvetica',
    fontSize: '35%',
    align: 'right',
    padding: 15
  },
  iconMedium: {
    flexDirection: 'row',
    color: '#B2FFD6',
    fontSize: 50,
    // paddingLeft: 60
    // margin: 30
  },
  headerSmall: {
    backgroundColor: '#eee',
    padding: theme.spacing(2),
    // textAlign: "center"
  },
  linkSmall: {
    color: '#595a61',
    // padding: theme.spacing(4),
    marginBottom: 120,
    textDecoration: 'none',
    fontFamily: 'helvetica',
    fontSize: '40%',
    align: 'right',
    padding: 10
  },
  iconSmall: {
    flexDirection: 'row',
    color: '#B2FFD6',
    fontSize: 50,
    // paddingLeft: 60
    // margin: 30
  },

}));

function Header() {
  const classes = useStyles();
  return (
    <Media queries={{
      small: "(max-width: 599px)",
      medium: "(min-width: 600px) and (max-width: 1199px)",
      large: "(min-width: 1200px)"
    }}>
      {matches => (
        <React.Fragment>
          {matches.large &&
            <header className={classes.headerLarge}>

              {/* <Breadcrumbs aria-label="breadcrumb"> */}
              <Typography variant="h1"
                align="center"
                color="#B2FFD6">
                Chris Hamersly
      <nav align="center">



                  <Link to="/" className={classes.linkLarge}>About
        {/* <HomeIcon className={classes.icon}/> */}
                  </Link>
                  <Link to="/portfolio" className={classes.linkLarge}> Portfolio
          {/* <ArtTrackIcon className={classes.icon} text="portfoilo"/>  */}
                  </Link>


                  <Link to="/blog" className={classes.linkLarge}> Blog
        {/* <BookIcon className={classes.icon}/>   */}
                  </Link>


                  {/* <Link to="/about" className={classes.link}>
          <InfoIcon /> About</Link> */}
                  <Link to="/contact" className={classes.linkLarge}> Contact
        {/* <ContactMailIcon className={classes.icon}/> */}
                  </Link>


                </nav>
              </Typography>

            </header>}
          {matches.medium &&
            <header className={classes.headerMedium}>

              {/* <Breadcrumbs aria-label="breadcrumb"> */}
              <Typography variant="h1"
                align="center"
                color="#B2FFD6">
                Chris Hamersly
      <nav align="center">



                  <Link to="/" className={classes.linkMedium}>About
        {/* <HomeIcon className={classes.icon}/> */}
                  </Link>
                  <Link to="/portfolio" className={classes.linkMedium}> Portfolio
          {/* <ArtTrackIcon className={classes.icon} text="portfoilo"/>  */}
                  </Link>


                  <Link to="/blog" className={classes.linkMedium}> Blog
        {/* <BookIcon className={classes.icon}/>   */}
                  </Link>


                  {/* <Link to="/about" className={classes.link}>
          <InfoIcon /> About</Link> */}
                  <Link to="/contact" className={classes.linkMedium}> Contact
        {/* <ContactMailIcon className={classes.icon}/> */}
                  </Link>


                </nav>
              </Typography>

            </header>}
          {matches.small &&
            <header className={classes.headerSmall}>

              {/* <Breadcrumbs aria-label="breadcrumb"> */}
              <Typography variant="h3"
                align="center"
                color="#B2FFD6">
                Chris Hamersly
      <nav align="center">



                  <Link to="/" className={classes.linkSmall}>About
        {/* <HomeIcon className={classes.icon}/> */}
                  </Link>
                  <Link to="/portfolio" className={classes.linkSmall}> Portfolio
          {/* <ArtTrackIcon className={classes.icon} text="portfoilo"/>  */}
                  </Link>


                  <Link to="/blog" className={classes.linkSmall}> Blog
        {/* <BookIcon className={classes.icon}/>   */}
                  </Link>


                  {/* <Link to="/about" className={classes.link}>
          <InfoIcon /> About</Link> */}
                  <Link to="/contact" className={classes.linkSmall}> Contact
        {/* <ContactMailIcon className={classes.icon}/> */}
                  </Link>


                </nav>
              </Typography>

            </header>}
        </React.Fragment>
      )}
    </Media>
  )
}

export default Header

{/* <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <React.Fragment>
              {matches.large && 

}
</React.Fragment>
)}
</Media> */}
