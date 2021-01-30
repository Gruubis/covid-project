const request = require("request");

const Countries = (callback) => {
  request(
    "https://opendata.ecdc.europa.eu/covid19/nationalcasedeath/json/?",
    { json: true },
    (err, res, body) => {
      if (err) {
        return console.log(err);
      }
      countries = body
        .map((item) => item.country)
        .filter((value, index, self) => self.indexOf(value) === index);
      callback(countries);
    }
  );
};

const Data = (callback) => {
    request("https://opendata.ecdc.europa.eu/covid19/nationalcasedeath/json/?", {json:true}, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        data = body.map(body => ({
            country: body.country,
            indicator: body.indicator,
            weekly_count: body.weekly_count,
            week: body.year_week

        }));
        console.log(data)
        callback(data)
    } );
}
// const country = (callback) => {
//     request('https://opendata.ecdc.europa.eu/covid19/nationalcasedeath/json/?', { json: true }, (err, res, body) => {
//         if (err) { return console.log(err); }
//         var countryName = body.filter(body => body.country === "Afghanistan")

//         countryName.map(   )
//         countryName.forEach(element => {
//             if (element.indicator === 'deaths')
//             { element.weekly_count
//         callback(countryName)
// }}))

module.exports = {Countries, Data};
