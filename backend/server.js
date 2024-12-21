import express from 'express';
import 'dotenv/config';

const app = express();

// const port = 3000;

console.log(process.env.PORT);


app.use('/static',express.static('public'));


app.get('/',(req,res) =>{
    res.send("this is my white boart backend node restart sever automatically");
})

app.get('/home',(req,res) => {
    res.send("this is put requst to the server");
})

app.put('/put', (req,res) => {
    res.send("this is put request to the server");
})

app.delete('/delete', (req,res) => {
    res.send("this is delete request to the server");
})




app.listen(process.env.PORT,() =>{
    console.log(`server app listening on port ${process.env.PORT}`);
});