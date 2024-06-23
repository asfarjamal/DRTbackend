// backend/routes/team.js
const express = require('express');
const router = express.Router();
const TeamMember = require('../models/TeamMember');

// Get all team members
router.get('/', async (req, res) => {
  try {
    const members = await TeamMember.find();
    res.json(members);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new team member
router.post('/', async (req, res) => {
  const member = new TeamMember({
    name: req.body.name,
    role: req.body.role,
    // bio: req.body.bio,
    // image: req.body.image,
  });

  try {
    const newMember = await member.save();
    res.status(201).json(newMember);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
