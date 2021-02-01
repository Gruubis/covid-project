const request = require("request");

const url = "https://opendata.ecdc.europa.eu/covid19/nationalcasedeath/json/?";

const Countries = (callback) => {
  request(url, { json: true }, (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    countries = body
      .map((item) => item.country)
      .filter((value, index, self) => self.indexOf(value) === index);
    callback(countries);
  });
};

const Data = (callback) => {
  request(url, { json: true }, (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    data = body.map((body) => ({
      country: body.country,
      indicator: body.indicator,
      weekly_count: body.weekly_count,
      week: body.year_week,
    }));
    deaths = data.filter((dat) => {
      if (dat.indicator === "deaths") {
        return {
          country: dat.country,
          weekly_count: dat.weekly_count,
          week: dat.week,
        };
      }
    });
    cases = data.filter((dat) => {
      if (dat.indicator === "cases") {
        return {
          country: dat.country,
          weekly_count: dat.weekly_count,
          week: dat.week,
        };
      }
    });
    let info = deaths.map((e, i) => {
      let temp = cases.find(
        (element) => element.country === e.country && element.week === e.week
      );
      if (temp) {
        return {
          country: e.country,
          deaths: e.weekly_count,
          cases: temp.weekly_count,
          week: e.week,
        };
      }
      return e;
    });
    callback(info);
  });
};

module.exports = { Countries, Data };
