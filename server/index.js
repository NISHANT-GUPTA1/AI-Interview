const express = require('express');
const app = express();
const interviewRoutes = require('./routes/interviewRoutes');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/api', interviewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
