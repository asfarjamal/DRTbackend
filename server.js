const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const teamRoutes = require('./routes/team');
const contactRoutes = require('./routes/contact');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

// Database connection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Middleware
app.use(express.json());

// Routes
app.use('/api/team-members', teamRoutes);
app.use('/api/contact', contactRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Drift Racing Team API');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
