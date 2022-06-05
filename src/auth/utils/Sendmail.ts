/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */

import nodemailer = require('nodemailer');
require('dotenv').config({ debug: false });

export async function Sendmail(subject: string, message: string, to: string) {
  const transporter = nodemailer.createTransport({
    service: process.env.mail_sender_service,
    auth: {
      user: process.env.mail_sender_email,
      pass: process.env.mail_sender_password,
    },
  });
  const mailOptions = {
    from: process.env.mail_sender_email,
    to: to,
    subject: subject,
    text: message,
  };

  await transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return false;
    } else {
      console.log('Email sent: ' + info.response + '  to: ' + info.accepted);
      console.log(info);
      return info;
    }
  });
}
