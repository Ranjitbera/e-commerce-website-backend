import express from 'express';
import https from 'https';
import bodyParser from 'body-parser';
import compression from 'compression';




const app = express();
app.use(compression);
app.use(bodyParser);

const server = https.createServer(app);


server.listen(8080,()=>{
    console.log("server running on port 8080");
})