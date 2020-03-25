import express from "express"; 
const app = express();

app.get('/', (req, res, next) => {   
   res.send('Hello world')
})

app.listen(process.env.PORT || 4000, () => {console.log("server started");
})