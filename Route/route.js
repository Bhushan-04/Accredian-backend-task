const express = require('express');
const { check, validationResult } = require('express-validator');
const { createReferral } = require('../Controller/controller');
const router = express.Router();

const referralValidation = [
  check('yourName').not().isEmpty().withMessage('Your name is required'),
  check('yourEmail').isEmail().withMessage('Valid email is required'),
  check('friendName').not().isEmpty().withMessage('Friend\'s name is required'),
  check('friendEmail').isEmail().withMessage('Valid email is required')
];

router.post('/', createReferral);

module.exports = router;
