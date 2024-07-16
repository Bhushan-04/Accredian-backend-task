const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  try {
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.USER, 
        pass: process.env.PASS, 
      },
    });

    const mailOptions = {
      from: "viniciijr@gmail.com",
      to,
      subject,
      text,
    };

    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};

module.exports = { sendEmail };
