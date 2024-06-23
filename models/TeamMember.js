// backend/models/TeamMember.js
const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  // bio: {
  //   type: String,
  //   required: true
  // },
  // image: {
  //   type: String
  // }
});

module.exports = mongoose.model('TeamMember', teamMemberSchema);
