const nodemailer = require('nodemailer');

const sendMail = async (userMail) => {
  const transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
      type: process.env.MAIL_TYPE,
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });
  
  const mailOptions = {
    from: process.env.MAIL_FROM,
    to: userMail,
    subject: "Digital-Diary Signup",
    text: "Hi you successfully signup to Digital-Diary",
  };

  await transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent successfully");
    }
  });
};

module.exports = sendMail;
