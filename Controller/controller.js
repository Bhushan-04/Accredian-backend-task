const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { validationResult } = require('express-validator');
const { sendEmail } = require('../services/emailService');

const createReferral = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, friendsusername, friendsemail } = req.body;

  try {
    const newReferral = await prisma.referral.create({
      data: { username, email, friendsusername, friendsemail }
    });

    const subject = `Referral code from ${username}`;

    const randomString = generateReferral(6);

    const text = `Hello ${friendsusername},\n\n${username} has referred you. This is the referral code ${randomString}  !`;
    await sendEmail(friendsemail, subject, text);

    res.status(201).json(newReferral);
  } catch (error) {
    next(error);
  }
};

function generateReferral(length) {
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  var characters = characters + uppercaseLetters;

  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  
  return result;
}


module.exports = { createReferral };
