const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "umant9771@gmail.com",
    pass: "yahdeugkkgxrdqpn",
  },
  tls:false
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(to, subject, text, html) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'umant9771@gmail.com', // sender address
    to,
    subject,
    text,
  });

}

module.exports = {sendMail}

// main().catch(console.error);
