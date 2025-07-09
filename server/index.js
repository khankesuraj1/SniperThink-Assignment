const express = require('express');
const path = require('path');
const cors = require('cors');

const apiRoutes = require('./routes/api');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

// Serve frontend static files (after build)
app.use(express.static(path.join(__dirname, '../client/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
