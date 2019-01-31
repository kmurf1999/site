import nodemailer from 'nodemailer';


export default nodemailer.createTransport({
  service: process.env.EMAIL_PROVIDER,
  auth: {
    user: process.env.EMAIL_AUTH_USER,
    pass: process.env.EMAIL_AUTH_PASS
  }
});
