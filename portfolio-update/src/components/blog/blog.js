
/////////////  DEPENDENCIES BEGIN /////////////   
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { grey } from '@material-ui/core/colors'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Media from 'react-media'
/////////////  DEPENDENCIES END /////////////

/////////////  STYLING BEGINS /////////////

const useStyles = makeStyles((theme) => ({

   /////////////// SMALL SCREEN BEGIN /////////////
  rootSmall: {
    maxWidth: 500,
    marginLeft: 50,
    marginTop: 50,
    marginBottom: 50
  },
  /////////////// MEDIUM SCREEN BEGIN /////////////
  rootMedium: {
    maxWidth: 500,
    marginLeft: 50,
    marginTop: 50,
    marginBottom: 50
  },
  /////////////// LARGE SCREEN BEGIN /////////////
  rootLarge: {
    maxWidth: 500,
    marginLeft: 50,
    marginTop: 50,
    marginBottom: 50
  },
  /////////////// RESPONSIVE /////////////
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: grey[500],
  }
}))
/////////////  STYLING ENDS /////////////

function Blog () {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Media queries={{
        small: '(max-width: 599px)',
        medium: '(min-width: 600px) and (max-width: 1199px)',
        large: '(min-width: 1200px)'
      }}>
        {matches => (
          <div>
            {matches.small &&
              <Card className={classes.rootSmall}>
                <CardHeader
                  avatar={
                    <Avatar aria-label='recipe' className={classes.avatar}>
                      Hi!
                  </Avatar>
                  }
                  title='Today is the beginning'
                  subheader="November 15th, 2020'
                />
                <CardMedia
                  className={classes.media}
                  image="https://i.ibb.co/mRLqtd7/IMG-2481.jpg"
                  title="Alki Beach"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    While decompressing from a seemingly long, but relatively short bootcamp experience, I decided to take on this portfolio.  This was built using React and served as a bit of practice, and to serve as a marker.  This is currently where I am on my journey.  I'm sure in a couple of years, I will look back at this portfolio fondly, and have a memory of it, much like other accomplishments I've made in my professional career.  To mark this occasion, here is a list of 'firsts' that I remember from my previous career.  Here is to making many more firsts as I grow in this career
      </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p"> In no particular order </Typography>
                    <Typography variant="body2" color="textSecondary" component="li">The first photo I developed</Typography>
                    <Typography variant="body2" color="textSecondary" component="li">The first shirt I printed</Typography>
                    <Typography variant="body2" color="textSecondary" component="li">The first poster I printed</Typography>
                    <Typography variant="body2" color="textSecondary" component="li"> The first tour I went on</Typography>
                    <Typography variant="body2" color="textSecondary" component="li"> The first trip I took to LA for work</Typography>
                    <Typography variant="body2" color="textSecondary" component="li"> The first shirt I printed at my own shop</Typography>
                    <Typography variant="body2" color="textSecondary" component="li">The first day working in my own storefront</Typography>
                    <Typography variant="body2" color="textSecondary" component="li">The first wall I successfully framed </Typography>
                  </CardContent>
                </Collapse>
              </Card>}
            {matches.medium && <Card className={classes.rootMedium}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    Hi!
        </Avatar>
                }

                title="Today is the beginning"
                subheader="November 15th, 2020"
              />
              <CardMedia
                className={classes.media}
                image="https://i.ibb.co/mRLqtd7/IMG-2481.jpg"
                title="Alki Beach"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  While decompressing from a seemingly long, but relatively short bootcamp experience, I decided to take on this portfolio.  This was built using React and served as a bit of practice, and to serve as a marker.  This is currently where I am on my journey.  I'm sure in a couple of years, I will look back at this portfolio fondly, and have a memory of it, much like other accomplishments I've made in my professional career.  To mark this occasion, here is a list of 'firsts' that I remember from my previous career.  Here is to making many more firsts as I grow in this career
      </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p"> In no particular order </Typography>
                  <Typography variant="body2" color="textSecondary" component="li">The first photo I developed</Typography>
                  <Typography variant="body2" color="textSecondary" component="li">The first shirt I printed</Typography>
                  <Typography variant="body2" color="textSecondary" component="li">The first poster I printed</Typography>
                  <Typography variant="body2" color="textSecondary" component="li"> The first tour I went on</Typography>
                  <Typography variant="body2" color="textSecondary" component="li"> The first trip I took to LA for work</Typography>
                  <Typography variant="body2" color="textSecondary" component="li"> The first shirt I printed at my own shop</Typography>
                  <Typography variant="body2" color="textSecondary" component="li">The first day working in my own storefront</Typography>
                  <Typography variant="body2" color="textSecondary" component="li">The first wall I successfully framed </Typography>
                </CardContent>
              </Collapse>
            </Card>}
            {matches.large && <Card className={classes.rootLarge}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    Hi!
        </Avatar>
                }

                title="Today is the beginning"
                subheader="November 15th, 2020"
              />
              <CardMedia
                className={classes.media}
                image="https://i.ibb.co/mRLqtd7/IMG-2481.jpg"
                title="Alki Beach"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  While decompressing from a seemingly long, but relatively short bootcamp experience, I decided to take on this portfolio.  This was built using React and served as a bit of practice, and to serve as a marker.  This is currently where I am on my journey.  I'm sure in a couple of years, I will look back at this portfolio fondly, and have a memory of it, much like other accomplishments I've made in my professional career.  To mark this occasion, here is a list of 'firsts' that I remember from my previous career.  Here is to making many more firsts as I grow in this career
      </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p"> In no particular order </Typography>
                  <Typography variant="body2" color="textSecondary" component="li">The first photo I developed</Typography>
                  <Typography variant="body2" color="textSecondary" component="li">The first shirt I printed</Typography>
                  <Typography variant="body2" color="textSecondary" component="li">The first poster I printed</Typography>
                  <Typography variant="body2" color="textSecondary" component="li"> The first tour I went on</Typography>
                  <Typography variant="body2" color="textSecondary" component="li"> The first trip I took to LA for work</Typography>
                  <Typography variant="body2" color="textSecondary" component="li"> The first shirt I printed at my own shop</Typography>
                  <Typography variant="body2" color="textSecondary" component="li">The first day working in my own storefront</Typography>
                  <Typography variant="body2" color="textSecondary" component="li">The first wall I successfully framed </Typography>
                </CardContent>
              </Collapse>
            </Card>}
          </div>
        )}
      </Media>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              Hi!
        </Avatar>
          }

          title="Today is the beginning"
          subheader="November 15th, 2020"
        />
        <CardMedia
          className={classes.media}
          image="https://i.ibb.co/mRLqtd7/IMG-2481.jpg"
          title="Alki Beach"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            While decompressing from a seemingly long, but relatively short bootcamp experience, I decided to take on this portfolio.  This was built using React and served as a bit of practice, and to serve as a marker.  This is currently where I am on my journey.  I'm sure in a couple of years, I will look back at this portfolio fondly, and have a memory of it, much like other accomplishments I've made in my professional career.  To mark this occasion, here is a list of 'firsts' that I remember from my previous career.  Here is to making many more firsts as I grow in this career
      </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p"> In no particular order </Typography>
            <Typography variant="body2" color="textSecondary" component="li">The first photo I developed</Typography>
            <Typography variant="body2" color="textSecondary" component="li">The first shirt I printed</Typography>
            <Typography variant="body2" color="textSecondary" component="li">The first poster I printed</Typography>
            <Typography variant="body2" color="textSecondary" component="li"> The first tour I went on</Typography>
            <Typography variant="body2" color="textSecondary" component="li"> The first trip I took to LA for work</Typography>
            <Typography variant="body2" color="textSecondary" component="li"> The first shirt I printed at my own shop</Typography>
            <Typography variant="body2" color="textSecondary" component="li">The first day working in my own storefront</Typography>
            <Typography variant="body2" color="textSecondary" component="li">The first wall I successfully framed </Typography>
          </CardContent>
        </Collapse>
      </Card>


    </>
  )
}

export default Blog
