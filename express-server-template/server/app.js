const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors()); // allows for fetching data to public directory, from server directory.


app.get('/', (req, res) => res.send('Hello World!'));

app.get('/test1', (req,res)=> {
    try {
        res.json({
            "name":"Mikkel",
            "age":25 
        })  
    } catch (error) {
    console.log('error: ', error);  
    }
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));