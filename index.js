const express = require('express');
const app = express();

app.get('/', (req,res) =>{

    res.send({hi:'Hi Kary'});
});

app.listen(5000);