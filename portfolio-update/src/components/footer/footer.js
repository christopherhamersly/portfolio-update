import { React }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link} from '@material-ui/core';
import Media from 'react-media';
// import './footer.css'

// var Copyright = require('react-copyright');
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#eee',
    padding: theme.spacing(6),
  },
  link: {
    marginRight: 30,
    color: "#080807", 
    textDecoration: 'none',
    paddingTop: 30,
      marginTop: 10,
  },
  copyright: {
    marginTop: 10,
  }
}));

function Footer() {
  const classes = useStyles();
  return (
        <>
    <footer fixed="bottom" className={classes.footer}>
       <Typography
        className={classes.copyright}
        variant="body2"
        color="textSecondary"
        align="center"
      >
        {"Copyright © "}
        <Link color="inherit" href="https://www.christopherhamersly.com">
          Chris Hamersly
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
     
    <Typography 
    className={classes.copyright}  
    variant="body2"
        color="textSecondary"
        align="center"> christopherhamersly@gmail.com </Typography>
    <Typography 
    className={classes.copyright}
     variant="body2"
        color="textSecondary"
        align="center"> 206.850.9721 </Typography>
        <Typography 
    className={classes.copyright}
     variant="body2"
        color="textSecondary"
        align="center">
     <a href="https://github.com/christopherhamersly" target="blank" className={classes.copyright}> GitHub </a>
     </Typography>
     <Typography
      variant="body2"
        color="textSecondary"
        align="center">
      <a href="https://www.linkedin.com/in/christopher-hamersly/" target="blank" className={classes.copyright}> LinkedIn </a>
      </Typography>
    </footer>
      
   </>
  )
}





export default Footer


