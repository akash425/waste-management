const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();



// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { }).then(() => console.log('Connected to MongoDB')).catch(err => console.error('Could not connect to MongoDB', err));;

// Define routes
const farmerRoutes = require('./routes/farmerRoutes');
const companyRoutes = require('./routes/companyRoutes');

app.use(bodyParser.json());
app.use(cors());
app.use('/api/farmers', farmerRoutes);
app.use('/api/companies', companyRoutes);

// Start server
const port = 3001;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});