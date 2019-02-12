require('dotenv').load();
import nodemailer from 'nodemailer';

const mailer = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_AUTH_USER,
    pass: process.env.EMAIL_AUTH_PASS
  }
});

// verify connection configuration
mailer.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to mailer server");
  }
});

export default mailer;
