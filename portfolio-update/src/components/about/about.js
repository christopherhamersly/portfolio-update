import React from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
// import { Image } from "@chakra-ui/core";
import ImageContentHover from 'react-image-hover';
// import HoverImage from "react-hover-image";
// import InfoIcon from '@material-ui/icons/Info';
import Media from 'react-media';



const useStyles = makeStyles((theme) => ({
  bodySmall: {
    backgroundColor: '#95f777',
    padding: theme.spacing(6),
    textAlign: "center"
  },
  imageSmall:{
    marginLeft: 50,
    marginBottom: 15,
    marginTop: 50,
    fontFamily: 'helvetica',
    fontSize: 30,
  },
  iAmSmall: {
    marginLeft: 50,
    marginTop: 50,
    marginBottom: 15
  },
  iAmAnswerSmall: {
    marginLeft: 50,
    marginBottom: 15
  },
  currentlySmall: {
    marginLeft: 50,
    marginTop: 30,
    marginBottom: 15
  },
  currentlyAnswerSmall: {
    marginLeft: 50,
    marginBottom: 15
  },
  myStorySmall: {
    marginLeft: 50,
    marginTop: 30,
    marginBottom: 15
  },
   aboutMeSmall : {
    marginLeft: 50,
    marginBottom: 15
  },
   bodyMedium: {
    backgroundColor: '#95f777',
    padding: theme.spacing(6),
    textAlign: "center"
  },
  imageMedium:{
    marginLeft: 50,
    marginBottom: 15,
    marginTop: 50,
    fontFamily: 'helvetica',
    fontSize: 30,
  },
  iAmMedium: {
    marginLeft: 50,
    marginTop: 50,
    marginBottom: 15
  },
  iAmAnswerMedium: {
    marginLeft: 0,
    marginBottom: 15
  },
  currentlyMedium: {
    marginLeft: 50,
    marginTop: 30,
    marginBottom: 15
  },
  currentlyAnswerMedium: {
    marginLeft: 50,
    marginBottom: 15
  },
  myStoryMedium: {
    marginLeft: 50,
    marginTop: 30,
    marginBottom: 15
  },
   aboutMeMedium : {
    marginLeft: 50,
    marginBottom: 15
  },
   bodyLarge: {
    backgroundColor: '#95f777',
    padding: theme.spacing(6),
    textAlign: "center"
  },
  imageLarge:{
    marginLeft: 50,
    marginBottom: 15,
    marginTop: 50,
    fontFamily: 'helvetica',
    fontSize: 30,
  },
  iAmLarge: {
    marginLeft: 50,
    marginTop: 50,
    marginBottom: 15
  },
  iAmAnswerLarge: {
    marginLeft: 50,
    marginBottom: 15
  },
  currentlyLarge: {
    marginLeft: 50,
    marginTop: 30,
    marginBottom: 15
  },
  currentlyAnswerLarge: {
    marginLeft: 50,
    marginBottom: 15
  },
  myStoryLarge: {
    marginLeft: 50,
    marginTop: 30,
    marginBottom: 15
  },
   aboutMeLarge : {
    marginLeft: 50,
    marginBottom: 15
  },
}));



function About() {
  const classes = useStyles();
  return (
    <>
  <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <React.Fragment>
              {matches.small && 
              <div>
     {/* <ImageContentHover 
          className={classes.imageSmall}
          tileWidth="460px"
          tileHeight="460px" 
          image="https://i.ibb.co/SftKBj5/chris-weekend-warrior.png" 
          content={{
            image:"https://i.ibb.co/P11d6xm/Blog-Post.jpg",
            title: '',
            body: '',
          }} 
          
          effect="fadeIn" /> */}
     
      <Typography variant='h3' className = {classes.iAmSmall}> I am....</Typography>
      <Typography variant='h5' className = {classes.iAmAnswerSmall}>  a Software developer based in Seattle, Washington</Typography>
      <Typography variant='h3' className = {classes.currentlySmall}> I am currently ....</Typography>
      <Typography variant='h5' className = {classes.currentlyAnswerSmall}> seeking employment </Typography>
      <Typography variant='h3' className = {classes.myStorySmall}> My Story. </Typography>
      <Typography variant='h5'className = {classes.aboutMeSmall}> I started my professional career as a screen printer.  I've done everything from running a press, to running my own shop, to criss-crossing the country printing in front of live audiences.  I started to learn coding while looking for an app on the market that didn't exist.  Over a year later I'm still learning everyday, and excited to see where this journey takes me.  </Typography>
     </div>}
              {matches.medium && 
              <div>
     <ImageContentHover 
          className={classes.imageMedium}
          tileWidth="460px"
          tileHeight="460px" 
          image="https://i.ibb.co/SftKBj5/chris-weekend-warrior.png" 
          content={{
            image:"https://i.ibb.co/P11d6xm/Blog-Post.jpg",
            title: '',
            body: '',
          }} 
          
          effect="fadeIn" />
     
      <Typography variant='h3' className = {classes.iAmMedium}> I am....</Typography>
      <Typography variant='h5' className = {classes.iAmAnswerMedium}>  a Software developer based in Seattle, Washington</Typography>
      <Typography variant='h3' className = {classes.currentlyMedium}> I am currently ....</Typography>
      <Typography variant='h5' className = {classes.currentlyAnswerMedium}> seeking employment </Typography>
      <Typography variant='h3' className = {classes.myStoryMedium}> My Story. </Typography>
      <Typography variant='h5'className = {classes.aboutMeMedium}> I started my professional career as a screen printer.  I've done everything from running a press, to running my own shop, to criss-crossing the country printing in front of live audiences.  I started to learn coding while looking for an app on the market that didn't exist.  Over a year later I'm still learning everyday, and excited to see where this journey takes me.  </Typography>
     </div>}}
              {matches.large && <div>
     <ImageContentHover 
          className={classes.imageLarge}
          tileWidth="460px"
          tileHeight="460px" 
          image="https://i.ibb.co/SftKBj5/chris-weekend-warrior.png" 
          content={{
            image:"https://i.ibb.co/P11d6xm/Blog-Post.jpg",
            title: '',
            body: '',
          }} 
          
          effect="fadeIn" />
     
      <Typography variant='h3' className = {classes.iAmLarge}> I am....</Typography>
      <Typography variant='h5' className = {classes.iAmAnswerLarge}>  a Software developer based in Seattle, Washington</Typography>
      <Typography variant='h3' className = {classes.currentlyLarge}> I am currently ....</Typography>
      <Typography variant='h5' className = {classes.currentlyAnswerLarge}> seeking employment </Typography>
      <Typography variant='h3' className = {classes.myStoryLarge}> My Story. </Typography>
      <Typography variant='h5'className = {classes.aboutMeLarge}> I started my professional career as a screen printer.  I've done everything from running a press, to running my own shop, to criss-crossing the country printing in front of live audiences.  I started to learn coding while looking for an app on the market that didn't exist.  Over a year later I'm still learning everyday, and excited to see where this journey takes me.  </Typography>
     </div>}}
            </React.Fragment>
          )}
        </Media>

  
    
    </>
  )
}

export default About
  