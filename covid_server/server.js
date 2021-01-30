const express = require("express");
const request = require("request");
const { Countries, Data } = require("./countries.js");
const cors = require("cors");

const app = express();
// 

app.use(cors());
let countries;
let datas;

Data((op) => {
    datas = op;
})
Countries((country) => {
  countries = country;
});

app.get('/getCountries', (req, res) => {
  res.send(countries) 
})

app.get("*", (req, res) => {
  let country = req.params
  const countryString = JSON.stringify(country)
  country = countryString.slice(7, countryString.length - 2)
  const info = datas.filter((data) => data.country === country);
  res.send(info);
});

app.listen(3000, () => {
  console.log("test");
});
