const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  try {
    // Create a transporter using your Gmail account
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.USER, // Your Gmail address
        pass: process.env.PASS, // Your Gmail password or App Password
      },
    });

    // Define email options
    const mailOptions = {
      from: "viniciijr@gmail.com",
      to,
      subject,
      text,
    };

    // Send email
    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};

module.exports = { sendEmail };
