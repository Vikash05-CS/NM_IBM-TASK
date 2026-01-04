const express = require('express');
const app = express();

app.use(express.json());

const studentRoutes = require('./routes/students');
app.use('/students', studentRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
