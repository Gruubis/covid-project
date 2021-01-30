const express = require("express");
const request = require("request");
const { Countries, Data } = require("./countries.js");
const cors = require("cors");

const app = express();
// 

app.use(cors());
let countries;
let datas;

Data((data) => {
    datas = data;
})
Countries((country) => {
  countries = country;
});

app.get('/getCountries', (req, res) => {
  res.send(countries) 
})

app.get("*", (req, res) => {
  country = req.params
  string = JSON.stringify(country)
  country = string.slice(7, string.length - 2)
  let info = data.filter((data) => data.country === country);
  res.send(info);
});

app.listen(3000, () => {
  console.log("test");
});
