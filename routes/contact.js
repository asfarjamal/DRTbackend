const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
// const nodemailer = require('nodemailer'); // Comment out the nodemailer import

// POST contact form data
router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    // Save contact information to MongoDB
    const contact = new Contact({ name, email, phone, message });
    await contact.save();

    // Comment out the mail feature for now
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });

    // const mailOptions = {
    //   from: process.env.EMAIL_USER,
    //   to: process.env.EMAIL_USER,
    //   subject: 'New Contact Form Submission',
    //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    // };

    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     return res.status(500).json({ message: error.toString() });
    //   }
    //   res.status(200).json({ message: 'Message sent successfully' });
    // });

    // Respond with success message after saving to database
    res.status(200).json({ message: 'Contact information saved successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
