import React from 'react';
import emailjs from 'emailjs-com';
import { makeStyles } from '@material-ui/core/styles';
import Media from 'react-media';
require('dotenv').config();

const useStyles = makeStyles((theme) => ({
  
  contactForm: {
    // backgroundColor: '#28464B',
    padding: theme.spacing(6),
    // textAlign: "center"
  },
  textLarge: {
    fontSize: 20,
    fontFamily: 'helvetica',
    marginRight: 30,
    marginLeft: 100
  },
  messageTextLarge: {
    fontSize: 20,
    fontFamily: 'helvetica',
    marginRight: 30,
    marginLeft: 100,
    marginBottom: 300,
    // textAlign: 'center'
  },
  contactNameInputLarge: {
    width: 700,
    height: 30,
    marginLeft: 130,
    marginBottom: 40,
    padding: 10,
    fontSize: 20,
    fontFamily: 'helvetica'

    // padding: theme.spacing(6),
  },
  contactEmailInputLarge: {
    width: 700,
    height: 30,
    marginLeft: 55,
    marginBottom: 40,
    padding: 10,
    fontSize: 20,
    fontFamily: 'helvetica'
    // padding: theme.spacing(6),
  },
  contactSubjectInputLarge: {
    width: 700,
    height: 30,
    marginLeft: 115,
    marginBottom: 40,
    padding: 10,
    fontSize: 20,
    fontFamily: 'helvetica'
    // padding: theme.spacing(6),
  },
  contactMessageInputLarge: {
    width: 700,
    height: 400,
    marginLeft: 325,
    marginBottom: 40,
    padding: 10,
    fontSize: 20,
    fontFamily: 'helvetica'
    // padding: theme.spacing(6),
  },
  sendButtonLarge: {
    width: 725,
    height: 50,
    marginLeft: 325,
    marginBottom: 40,
    padding: 10,
    fontSize: 20,
    fontFamily: 'helvetica'
  },
   textMedium: {
    fontSize: 5,
    fontFamily: 'helvetica',
    marginRight: 30,
    marginLeft: 100
  },
  messageTextMedium: {
    fontSize: 20,
    fontFamily: 'helvetica',
    marginRight: 30,
    marginLeft: 100,
    marginBottom: 300,
    // textAlign: 'center'
  },
  contactNameInputMedium: {
    width: 700,
    height: 30,
    marginLeft: 130,
    marginBottom: 40,
    padding: 10,
    fontSize: 20,
    fontFamily: 'helvetica'

    // padding: theme.spacing(6),
  },
  contactEmailInputMedium: {
    width: 700,
    height: 30,
    marginLeft: 55,
    marginBottom: 40,
    padding: 10,
    fontSize: 20,
    fontFamily: 'helvetica'
    // padding: theme.spacing(6),
  },
  contactSubjectInputMedium: {
    width: 700,
    height: 30,
    marginLeft: 115,
    marginBottom: 40,
    padding: 10,
    fontSize: 20,
    fontFamily: 'helvetica'
    // padding: theme.spacing(6),
  },
  contactMessageInputMedium: {
    width: 700,
    height: 400,
    marginLeft: 325,
    marginBottom: 40,
    padding: 10,
    fontSize: 20,
    fontFamily: 'helvetica'
    // padding: theme.spacing(6),
  },
  sendButtonMedium: {
    width: 725,
    height: 50,
    marginLeft: 325,
    marginBottom: 40,
    padding: 10,
    fontSize: 20,
    fontFamily: 'helvetica'
  },
  textSmall: {
    fontSize: 5,
    fontFamily: 'helvetica',
    marginRight: 30,
    marginLeft: 100
  },
  messageTextSmall: {
    fontSize: 20,
    fontFamily: 'helvetica',
    marginRight: 30,
    marginLeft: 100,
    marginBottom: 300,
    // textAlign: 'center'
  },
  contactNameInputSmall: {
    width: 700,
    height: 30,
    marginLeft: 130,
    marginBottom: 40,
    padding: 10,
    fontSize: 20,
    fontFamily: 'helvetica'

    // padding: theme.spacing(6),
  },
  contactEmailInputSmall: {
    width: 700,
    height: 30,
    marginLeft: 55,
    marginBottom: 40,
    padding: 10,
    fontSize: 20,
    fontFamily: 'helvetica'
    // padding: theme.spacing(6),
  },
  contactSubjectInputSmall: {
    width: 700,
    height: 30,
    marginLeft: 115,
    marginBottom: 40,
    padding: 10,
    fontSize: 20,
    fontFamily: 'helvetica'
    // padding: theme.spacing(6),
  },
  contactMessageInputSmall: {
    width: 700,
    height: 400,
    marginLeft: 325,
    marginBottom: 40,
    padding: 10,
    fontSize: 20,
    fontFamily: 'helvetica'
    // padding: theme.spacing(6),
  },
  sendButtonSmall: {
    width: 725,
    height: 50,
    marginLeft: 325,
    marginBottom: 40,
    padding: 10,
    fontSize: 20,
    fontFamily: 'helvetica'
  },
}));
// const SERVICE_ID = process.env.SERVICE_ID;
// const TEMPLATE_ID = process.env.TEMPLATE_ID;
// const USER_ID = process.env.USER_ID
function Form() {

  const classes = useStyles();

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_jnyi882', 'template_khd6yu5', e.target, 'user_KW0vB700RZZeBNNRTVwcA')
      // console.log('event target', e.target)
      .then((result) => {
        window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
        console.log(error.text);
        // console.log('in the email form')
      });
  }

  return (
    <>
    <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <React.Fragment>
              {matches.large && 
              <form className={classes.contactFormLarge} onSubmit={sendEmail}>
      <input className={classes.contactNameLarge} type="hidden" name="contact_number" />
      <label className={classes.textLarge}>Name: </label>
      <input className={classes.contactNameInputLarge} type="text" name="from_name" />
      <br></br>
      <label className={classes.textLarge}>Email Address: </label>
      <input className={classes.contactEmailInputLarge} type="email" name="from_email" />
      <br></br>
      <label className={classes.textLarge}>Subject: </label>
      <input className={classes.contactSubjectInputLarge} type="text" name="subject" />
      <br></br>
      <label className={classes.messageTextLarge}>Message: </label>
      <br></br>
      <textarea className={classes.contactMessageInputLarge} name="message" />
      
      <input className={classes.sendButtonLarge} type="submit" value="Send" />
    </form>}
              {matches.medium && <form className={classes.contactFormMedium} onSubmit={sendEmail}>
      <input className={classes.contactNameMedium} type="hidden" name="contact_number" />
      <label className={classes.textMedium}>Name: </label>
      <input className={classes.contactNameInputMedium} type="text" name="from_name" />
      <br></br>
      <label className={classes.textMedium}>Email Address: </label>
      <input className={classes.contactEmailInputMedium} type="email" name="from_email" />
      <br></br>
      <label className={classes.textMedium}>Subject: </label>
      <input className={classes.contactSubjectInputMedium} type="text" name="subject" />
      <br></br>
      <label className={classes.messageTextMedium}>Message: </label>
      <br></br>
      <textarea className={classes.contactMessageInputMedium} name="message" />
      
      <input className={classes.sendButtonMedium} type="submit" value="Send" />}
      </form>}
              {matches.small && <form className={classes.contactFormSmall} onSubmit={sendEmail}>
      <input className={classes.contactNameSmall} type="hidden" name="contact_number" />
      <label className={classes.textSmall}>Name: </label>
      <input className={classes.contactNameInputSmall} type="text" name="from_name" />
      <br></br>
      <label className={classes.textSmall}>Email Address: </label>
      <input className={classes.contactEmailInputSmall} type="email" name="from_email" />
      <br></br>
      <label className={classes.textSmall}>Subject: </label>
      <input className={classes.contactSubjectInputSmall} type="text" name="subject" />
      <br></br>
      <label className={classes.messageTextSmall}>Message: </label>
      <br></br>
      <textarea className={classes.contactMessageInputSmall} name="message" />
      
      <input className={classes.sendButtonSmall} type="submit" value="Send" />}
      </form>}
            </React.Fragment>
          )}
        </Media>
    </>
  );
}

export default Form


{/* <ReactContactForm titlePlaceholder="your name" contentsPlaceholder="What would you like to talk about?" buttonText="send" to="christopherhamersly@gmail.com" /> */ }

