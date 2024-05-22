const express=require('express')
const cors=require('cors')
const app=express();
app.use(cors());

app.get('/',(req,resp)=>{
    resp.status(200).send("wellcome to nodejs");
})

app.listen(3400);