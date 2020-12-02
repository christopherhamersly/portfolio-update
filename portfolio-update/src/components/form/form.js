
/////////////  DEPENDENCIES BEGIN /////////////
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import emailjs from 'emailjs-com';
import Media from 'react-media';
/////////////  DEPENDENCIES END  /////////////


/////////////  STYLING BEGINS /////////////

const useStyles = makeStyles((theme) => ({
  

  contactForm: {
    padding: theme.spacing(6),
  },
  /////////////// LARGE SCREEN BEGIN /////////////
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
  },
  contactNameInputLarge: {
    width: 700,
    height: 30,
    marginLeft: 130,
    marginBottom: 40,
    padding: 10,
    fontSize: 20,
    fontFamily: 'helvetica'
  },
  contactEmailInputLarge: {
    width: 700,
    height: 30,
    marginLeft: 55,
    marginBottom: 40,
    padding: 10,
    fontSize: 20,
    fontFamily: 'helvetica'
  },
  contactSubjectInputLarge: {
    width: 700,
    height: 30,
    marginLeft: 115,
    marginBottom: 40,
    padding: 10,
    fontSize: 20,
    fontFamily: 'helvetica'
  },
  contactMessageInputLarge: {
    width: 700,
    height: 400,
    marginLeft: 325,
    marginBottom: 40,
    padding: 10,
    fontSize: 20,
    fontFamily: 'helvetica'
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
  /////////////// MEDIUM SCREEN BEGIN /////////////
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
  },
  contactNameInputMedium: {
    width: 700,
    height: 30,
    marginLeft: 130,
    marginBottom: 40,
    padding: 10,
    fontSize: 20,
    fontFamily: 'helvetica'
  },
  contactEmailInputMedium: {
    width: 700,
    height: 30,
    marginLeft: 55,
    marginBottom: 40,
    padding: 10,
    fontSize: 20,
    fontFamily: 'helvetica'
  },
  contactSubjectInputMedium: {
    width: 700,
    height: 30,
    marginLeft: 115,
    marginBottom: 40,
    padding: 10,
    fontSize: 20,
    fontFamily: 'helvetica'
  },
  contactMessageInputMedium: {
    width: 700,
    height: 400,
    marginLeft: 325,
    marginBottom: 40,
    padding: 10,
    fontSize: 20,
    fontFamily: 'helvetica'
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
  /////////////// SMALL SCREEN BEGIN /////////////
  textSmall: {
    fontSize: 20,
    fontFamily: 'helvetica',
    marginRight: 10,
    marginLeft: 10
  },
  messageTextSmall: {
    fontSize: 20,
    fontFamily: 'helvetica',
    marginRight: 30,
    marginLeft: 100,
    marginBottom: 300,
    marginTop: 30
  },
  contactNameInputSmall: {
    width: 200,
    height: 20,
    marginLeft: 30,
    marginBottom: 30,
    marginTop: 20,
    padding: 10,
    fontSize: 20,
    fontFamily: 'helvetica'
  },
  contactEmailInputSmall: {
    width: 200,
    height: 20,
    marginLeft: 30,
    marginBottom: 30,
    marginTop: 20,
    padding: 10,
    fontSize: 20,
    fontFamily: 'helvetica'
  },
  contactSubjectInputSmall: {
    width: 200,
    height: 18,
    marginLeft: 30,
    marginBottom: 30,
    marginTop: 20,
    padding: 10,
    fontSize: 20,
    fontFamily: 'helvetica'
  },
  contactMessageInputSmall: {
    width: 200,
    height: 18,
    marginLeft: 30,
    marginBottom: 30,
    marginTop: 20,
    padding: 10,
    fontSize: 20,
    fontFamily: 'helvetica'
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
/////////////  STYLING ENDS /////////////

function Form() {

  const classes = useStyles();

  function sendEmail(e) {
    e.preventDefault();    

    emailjs.sendForm('service_jnyi882', 'template_khd6yu5', e.target, 'user_KW0vB700RZZeBNNRTVwcA')
      .then((result) => {
        window.location.reload()  
      }, (error) => {
        console.log(error.text);
       
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


