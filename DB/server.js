const express = require("express");
const { Countries, Data } = require("./functions.js");
const cors = require("cors");

const app = express();

app.use(cors());
let countries;
let data;

Data((info) => {
  data = info;
});
Countries((country) => {
  countries = country;
});

app.get("/getCountries", (req, res) => {
  if (countries == []) {
    res.status(500);
    res.send("covid-19 data api is offline");
  }
  res.send(countries);
});

app.get("*", (req, res) => {
  let country = req.params;
  const countryString = JSON.stringify(country);
  country = countryString.slice(7, countryString.length - 2);
  const info = data.filter((data) => data.country === country);
  res.send(info);
});

app.listen(3001, () => {
  console.log("listening on 3001");
});
