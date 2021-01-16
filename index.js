const express = require("express"); // import the express js

const bodyParser = require("body-parser");

const cors = require("cors");

const validator = require("validator");

const app = express();
// initiate the express js

const CurrencyRateRoute = require("./routes/CurrencyRateRoute");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

// app.use(formData.array());

app.use(express.static("public"));

app.use(cors());

// Handle Cors Policy here -- Start

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader("Access-Control-Allow-Credentials", "true");

    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");

    res.setHeader("Access-Control-Allow-Headers", "Origin,Cache-Control,Accept,X-Access-Token ,X-Requested-With, Content-Type, Access-Control-Request-Method");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    next();
});

// Handle Cors Policy here -- End


app.use("/api/", CurrencyRateRoute);

app.use("*", (req, res) => {
    res.status(404).send({type: "default", route: "/", message: "Hi there! Welcome to my CURRENCYRATES API."});
});


const server = app.listen(5000, () => {
    let host = server.address().address;

    let port = server.address.port;

    console.log("Server running at " + process.env.PORT);
});
