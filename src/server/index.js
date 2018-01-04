import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from 'dotenv'
dotenv.config()

const app = express();

app.use(bodyParser.json());
app.use(cors())

// app.use( express.static(__dirname + "./../build") );

// * destructoring functions needed from mainCtrl.js..you can also put many function names in one set of {} like {myName, whatName} 
import { myName } from "./mainCtrl"
import { whatName } from "./mainCtrl"
import { nickCelaya } from "./mainCtrl"

app.get("/api/name", myName);
app.post("/api/name", whatName);
app.get("/api/who", nickCelaya)


// * importing the whole file as a module and setting it to an object to use in the route object name can be anything you want
import * as mainCtrl from "./mainCtrl"

app.get("/api/name", mainCtrl.myName);
app.post("/api/name", mainCtrl.whatName);

// uses dotnev.config()
const PORT = process.env.PORT || 4000; //listnening on PORT in env file,if no port it defaults to port you set(3000,5000)

app.listen(PORT, () => {
  console.log(`War on port: ${PORT}`);
})
