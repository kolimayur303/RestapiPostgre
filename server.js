const express = require('express');
const app = express();
const studentRoutes = require('./src/student/routes');
const port = 3000;

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("hello world");
});

app.use('/api/student', studentRoutes);
app.listen(port, ()=> console.log(`app listening on port ${port}`));
