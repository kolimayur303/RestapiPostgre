const express = require('express');
const app = express();
const studentRoutes = require('./src/student/routes');
const port = 3000;

app.use(express.json());
app.use(express.urlencoded( {extended:false}));

app.use('/api/student', studentRoutes);

app.listen(port, ()=> console.log(`app listening on port ${port}`));
