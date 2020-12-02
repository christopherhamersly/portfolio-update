
/////////////  DEPENDENCIES BEGIN /////////////
import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Media from 'react-media'
/////////////  DEPENDENCIES END /////////////


/////////////  STYLING BEGINS /////////////

const useStyles = makeStyles((theme) => ({

  /////////////// LARGE SCREEN BEGIN /////////////
  headerLarge: {
    backgroundColor: '#eee',
    padding: theme.spacing(6)
  },
  linkLarge: {
    color: '#91808b',
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
    fontSize: 50
  },
  /////////////// MEDIUM SCREEN BEGIN /////////////
  headerMedium: {
    backgroundColor: '#eee',
    padding: theme.spacing(4),
  },
  linkMedium: {
    color: '#61595e',
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
    fontSize: 50
  },
  /////////////// SMALL SCREEN BEGIN /////////////
  headerSmall: {
    backgroundColor: '#eee',
    padding: theme.spacing(2)
  },
  linkSmall: {
    color: '#595a61',
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
    fontSize: 50
  }
}))
/////////////  STYLING ENDS /////////////

function Header() {
  const classes = useStyles();
  return (
    <Media queries={{
      small: "(max-width: 599px)",
      medium: "(min-width: 600px) and (max-width: 1199px)",
      large: "(min-width: 1200px)"
    }}>
      {matches => (
        <div>
          {matches.large &&
            <header className={classes.headerLarge}>
              <Typography variant="h1"
                align="center"
                color="#B2FFD6">
                Chris Hamersly
                <nav align="center">
                  <Link to="/" className={classes.linkLarge}>About
                  </Link>
                  <Link to="/portfolio" className={classes.linkLarge}> Portfolio
                  </Link>

                  <Link to="/blog" className={classes.linkLarge}> Blog
                  </Link>



                  <Link to="/contact" className={classes.linkLarge}> Contact
                  </Link>


                </nav>
              </Typography>

            </header>}
          {matches.medium &&
            <header className={classes.headerMedium}>

              <Typography variant="h1"
                align="center"
                color="#B2FFD6">
                Chris Hamersly
                <nav align="center">



                  <Link to="/" className={classes.linkMedium}>About
                  </Link>
                  <Link to="/portfolio" className={classes.linkMedium}> Portfolio
                  </Link>


                  <Link to="/blog" className={classes.linkMedium}> Blog
                  </Link>



                  <Link to="/contact" className={classes.linkMedium}> Contact
                  </Link>


                </nav>
              </Typography>

            </header>}
          {matches.small &&
            <header className={classes.headerSmall}>

              <Typography variant="h3"
                align="center"
                color="#B2FFD6">
                Chris Hamersly
                <nav align="center">



                  <Link to="/" className={classes.linkSmall}>About
                  </Link>
                  <Link to="/portfolio" className={classes.linkSmall}> Portfolio
                  </Link>


                  <Link to="/blog" className={classes.linkSmall}> Blog
                  </Link>



                  <Link to="/contact" className={classes.linkSmall}> Contact
                  </Link>


                </nav>
              </Typography>

            </header>}
        </div>
      )
      }
    </Media>
  )
}

export default Header


