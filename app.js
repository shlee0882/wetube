
// require는 node module을 어딘가에서 가져온다.
// const express = require('express')
import express from 'express';
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;
 
// function handleListening (){
//     console.log(`Listening on: http://localhost:${PORT}`);
// }

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

// function handleHome(req, res){
//     res.send("Hello from home!!");
// }

const handleHome = (req, res) => res.send("Hello from home!!123");

// function handleProfile(req, res){
//     res.send("You are on my profile");
// }

const handleProfile = (req,res) => res.send("You are on my profile111");

const betweenHome = (req, res, next) => {
    console.log("between");
    next();
}

// app.use(betweenHome);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));

// app.get("/", betweenHome, handleHome);

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
