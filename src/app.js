const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("./db/conn");
const bodyParser = require("body-parser");
const User = require("./models/userlogin")
const Auth = require("./models/authregister")
const Contact = require("./models/contactform")
const Doctor = require("./models/doctorform")
const hbs = require("hbs");
const { link } = require("fs");
const { request } = require("http");
const { response } = require("express");
const { find } = require("./models/userlogin");



const static_path = path.join(__dirname, "/views")


const app = express()
const port = process.env.PORT || 5000;

//setting the path 
const staticpath = path.join(__dirname, "../public");
const viewspath = path.join(__dirname, "../views");

//middleware

app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static(staticpath))
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views");




//routing
//app.get(path ,callback)

// app.use('', routes)

app.get("/", async(req, res) => {
    res.render("index");
})

app.get("/index.hbs", (req, res) => {
    res.render("index");
})


app.get("/appointment.hbs", async(req, res) => {
    res.render("appointment");
})

app.get("/registerpage.hbs", async(req, res) => {
    res.render("registerpage");
})

app.get("/doctorpage.hbs", async(req, res) => {
    res.render("doctorpage");
})

app.get("/patientpage.hbs", async(req, res) => {
    res.render("patientpage");
})

app.get("/loginpage.hbs", async(req, res) => {
    res.render("loginpage");
})

app.get("/views/doctorlist.hbs", (req, res) => {
    res.render("doctorlist.hbs");
})

app.get("/views/patientpage.hbs", (req, res) => {
    res.render("patientpage.hbs");
})

app.get("/views/doctorform.hbs", (req, res) => {
    res.render("doctorform.hbs");
})


app.get("/views/loginpage.hbs", (req, res) => {
    res.render("loginpage.hbs");
})

app.post("/registerpage.hbs", async(req, res) => {
    console.log(5)
    try {
        const password = req.body.password;
        const confirmpassword = req.body.confirmpassword;
        console.log(5)
        if (password === confirmpassword) {
            const registerpatient = new Auth({
                mname: req.body.mname,
                phone: req.body.phone,
                email: req.body.email,
                password: req.body.password,
                confirmpassword: req.body.confirmpassword
            })
            console.log(3);
            const registered = await registerpatient.save();
            res.status(201).render("index");
        } else {
            res.send("password are not matching")
        }
    } catch (error) {
        res.status(401).send(error);
    }
})

app.post("/loginpage.hbs", async(req, res) => {
    console.log(5)
    try {
        const password = req.body.password;
        console.log(5)
        if (password === password) {
            const loginpatient = new User({
                email: req.body.email,
                password: req.body.password,
            })
            console.log(3);
            const login = await loginpatient.save();
            res.status(201).render("index");
        } else {
            res.send("password are not matching")
        }
    } catch (error) {
        res.status(401).send(error);
    }
})


app.post("/appointment.hbs", async(req, res) => {
    console.log(5)
    try {
        const symptoms = req.body.symptoms;
        console.log(5)
        if (symptoms) {
            const data = new Contact({
                mname: req.body.mname,
                phone: req.body.phone,
                date: req.body.date,
                time: req.body.time,
                symptoms: req.body.symptoms
            })
            console.log(3);
            const pagal = await data.save();
            console.log("success");
            res.status(201).render("index");
        } else {
            res.send("form error")
        }
    } catch (error) {
        res.status(401).send(error);
    }
})


app.post("/doctorform.hbs", async(req, res) => {
    console.log(5)
    try {
        const password = req.body.password;
        const confirmpassword = req.body.confirmpassword;
        console.log(5)
        if (password === confirmpassword) {
            const doctorregister = new Doctor({
                mname: req.body.mname,
                phone: req.body.phone,
                email: req.body.email,
                address: req.body.address,
                city: req.body.city,
                password: req.body.password,
                confirmpassword: req.body.confirmpassword,
            })
            console.log(3);
            const doctored = await doctorregister.save();
            console.log(6);
            res.status(201).render("index");

        } else {
            res.send("password are not matching")
            console.log(7);
        }
    } catch (error) {
        res.status(401).send(error);
        console.log(9);
    }
})

app.listen(process.env.PORT | 5000, () => {
    console.log("server started")
});