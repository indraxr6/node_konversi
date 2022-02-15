const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/",(req,res) => {
    res.send({
        "message": "This is a GET endpoint"
    })
})

app.post("/bmi",(req,res) => {
    let berat = req.body.berat;
    let tinggi = req.body.tinggi;
    let tinggim = tinggi * 0.01;
    let bmi = berat / (tinggim * tinggim);
    let message;

    if(bmi < 18.5){
        message = "Berat badan kurang"; 
    }else if(bmi >= 18.5 && bmi <= 24.9){
        message = "Berat badan Ideal";
    }else if(bmi >= 25 && bmi <= 29.9){
        message = "Berat badan kelebihan";
    }else if(bmi >= 30){
        message = "Obesitas";
    }
    res.send({
        "berat": berat,
        "tinggi": tinggi,
        "result": {
            "message": message
        }
    })
})

const port = 8080;
app.listen(port, () => {
    console.log(`Running on port 8080`)
})