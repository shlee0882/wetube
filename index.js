
// require는 node module을 어딘가에서 가져온다.
// const express = require('express')
import express from 'express';

const app = express();
const PORT = 4000;
 
// function handleListening (){
//     console.log(`Listening on: http://localhost:${PORT}`);
// }

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

// function handleHome(req, res){
//     res.send("Hello from home!!");
// }

const handleHome = (req, res) => res.send("Hello from home!!");

// function handleProfile(req, res){
//     res.send("You are on my profile");
// }

const handleProfile = (req,res) => res.send("You are on my profile");

app.get("/", handleHome);
app.get("/profile", handleProfile);


app.listen(PORT, handleListening);
