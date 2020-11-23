import React from 'react';
import { NavLink, Link, Switch, Route } from 'react-router-dom';
// import Portfolio from '../portfolio/portfolio.js';
// import Home from '../home/home.js';
// import Form from '../form/form.js';
// import About from '../about/about.js';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import WhatshotIcon from '@material-ui/icons/Whatshot'
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import HomeIcon from '@material-ui/icons/Home';
// import InfoIcon from '@material-ui/icons/Info';
import BookIcon from '@material-ui/icons/Book';
// import { NonIdealState } from '@blueprintjs/core';
// import RNMaterialLetterIcon from 'react-native-material-letter-icon';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#a5b3c9',
    padding: theme.spacing(6),
    // textAlign: "center"
  },
  link: {
    color: '#B2FFD6',
    // padding: theme.spacing(4),
    marginBottom: 120,
    textDecoration: 'none',
    fontFamily: 'helvetica',
    fontSize: '10%', 
    align: "right",
    padding: 15
}, 
icon: {
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
    <header className={classes.header}>
       
        {/* <Breadcrumbs aria-label="breadcrumb"> */}
      <Typography variant="h1" 
      align="center" 
      color="#B2FFD6"> 
      Chris Hamersly
      <nav align="center">

      
       
        <Link to="/" className={classes.link}>About
        {/* <HomeIcon className={classes.icon}/> */}
        </Link>
       <Link to="/portfolio" className={classes.link}> Portfolio
          {/* <ArtTrackIcon className={classes.icon} text="portfoilo"/>  */}
          </Link>
         
        
        <Link to="/blog" className={classes.link}> Blog
        {/* <BookIcon className={classes.icon}/>   */}
        </Link>
       
        
        {/* <Link to="/about" className={classes.link}>
          <InfoIcon /> About</Link> */}
        <Link to="/contact" className={classes.link}> Contact
        {/* <ContactMailIcon className={classes.icon}/> */}
         </Link>
    
        
      </nav>
       </Typography>
      {/* </Breadcrumbs> */}
      {/* <Switch>
      <Route path="/about">
         <About />
       </Route>
       <Route path="/portfolio">
         <Portfolio />
       </Route>
       <Route path="/contact">
         <Form />
       </Route>
       <Route path="/">
         <Home />
       </Route>
     </Switch> */}

    </header>
  )
}

export default Header
