
/////////////  DEPENDENCIES BEGIN /////////////
import { React } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Link } from '@material-ui/core'
import Media from 'react-media'
/////////////  DEPENDENCIES END /////////////

/////////////  STYLING BEGINS /////////////

const useStyles = makeStyles((theme) => ({

  /////////////// LARGE SCREEN BEGIN /////////////
  footerLarge: {
    backgroundColor: '#eee',
    padding: theme.spacing(6)
  },
  linkLarge: {
    marginRight: 30,
    color: '#080807',
    textDecoration: 'none',
    paddingTop: 30,
    marginTop: 10
  },
  copyrightLarge: {
    marginTop: 10
  },
  /////////////// MEDIUM SCREEN BEGIN /////////////
  footerMedium: {
    backgroundColor: '#eee',
    padding: theme.spacing(6)
  },
  linkMedium: {
    marginRight: 30,
    color: '#080807',
    textDecoration: 'none',
    paddingTop: 30,
    marginTop: 10
  },
  copyrightMedium: {
    marginTop: 10
  },
  /////////////// SMALL SCREEN BEGIN /////////////
  footerSmall: {
    backgroundColor: '#eee',
    padding: theme.spacing(6)
  },
  linkSmall: {
    marginRight: 30,
    color: '#080807',
    textDecoration: 'none',
    paddingTop: 30,
    marginTop: 10
  },
  copyrightSmall: {
    marginTop: 10
  }
}))
/////////////  STYLING ENDS /////////////

function Footer() {
  const classes = useStyles();
  return (
    <>
      <Media queries={{
        small: '(max-width: 599px)',
        medium: '(min-width: 600px) and (max-width: 1199px)',
        large: '(min-width: 1200px)'
      }}>
        {matches => (
          <div>
            {matches.large &&
              <footer fixed="bottom" className={classes.footerLarge}>
                <Typography
                  className={classes.copyrightLarge}
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
                  className={classes.copyrightLarge}
                  variant="body2"
                  color="textSecondary"
                  align="center"> christopherhamersly@gmail.com </Typography>
                <Typography
                  className={classes.copyrightLarge}
                  variant="body2"
                  color="textSecondary"
                  align="center"> 206.850.9721 </Typography>
                <Typography
                  className={classes.copyrightLarge}
                  variant="body2"
                  color="textSecondary"
                  align="center">
                  <a href="https://github.com/christopherhamersly" target="blank" className={classes.copyrightLarge}> GitHub </a>
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  align="center">
                  <a href="https://www.linkedin.com/in/christopher-hamersly/" target="blank" className={classes.copyrightLarge}> LinkedIn </a>
                </Typography>
              </footer>}
            {matches.medium &&
              <footer fixed="bottom" className={classes.footerMedium}>
                <Typography
                  className={classes.copyrightMedium}
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
                  className={classes.copyrightMedium}
                  variant="body2"
                  color="textSecondary"
                  align="center"> christopherhamersly@gmail.com </Typography>
                <Typography
                  className={classes.copyrightMedium}
                  variant="body2"
                  color="textSecondary"
                  align="center"> 206.850.9721 </Typography>
                <Typography
                  className={classes.copyrightMedium}
                  variant="body2"
                  color="textSecondary"
                  align="center">
                  <a href="https://github.com/christopherhamersly" target="blank" className={classes.copyrightMedium}> GitHub </a>
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  align="center">
                  <a href="https://www.linkedin.com/in/christopher-hamersly/" target="blank" className={classes.copyrightMedium}> LinkedIn </a>
                </Typography>
              </footer>}
            {matches.small &&
              <footer fixed="bottom" className={classes.footerSmall}>
                <Typography
                  className={classes.copyrightSmall}
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
                  className={classes.copyrightSmall}
                  variant="body2"
                  color="textSecondary"
                  align="center"> christopherhamersly@gmail.com </Typography>
                <Typography
                  className={classes.copyrightMedium}
                  variant="body2"
                  color="textSecondary"
                  align="center"> 206.850.9721 </Typography>
                <Typography
                  className={classes.copyrightSmall}
                  variant="body2"
                  color="textSecondary"
                  align="center">
                  <a href="https://github.com/christopherhamersly" target="blank" className={classes.copyrightSmall}> GitHub </a>
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  align="center">
                  <a href="https://www.linkedin.com/in/christopher-hamersly/" target="blank" className={classes.copyrightSmall}> LinkedIn </a>
                </Typography>
              </footer>}
          </div>
        )}
      </Media>

    </>
  )
}





export default Footer


