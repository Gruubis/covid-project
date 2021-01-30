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
        deaths = data.filter(dat => {
          if(dat.indicator === 'deaths'){
            return({
                country: dat.country,
                weekly_count: dat.weekly_count,
                week: dat.week
            }
            )
          }
        })
        cases = data.filter((dat) => {
          if (dat.indicator === "cases") {
            return {
              country: dat.country,
              weekly_count: dat.weekly_count,
              week: dat.week,
            };
          }
        });
        let op = deaths.map((e, i) => {
          let temp = cases.find((element) => element.country === e.country && element.week === e.week);
          if (temp) {
            return({
              country: e.country,
              deaths: e.weekly_count,
              cases: temp.weekly_count,
              week: e.week

            })
          }
          return e;
        });
        console.log(op)
        callback(op)

    } );
}
// const Data = (callback) => {
//     request("https://opendata.ecdc.europa.eu/
//           cases = body.map(body => {
//             if(body.indicator === "cases"){
//                          return {
//                            country: body.country,
//                            weekly_count: body.weekly_count,
//                            week: body.year_week,
//                          };
//             }
//           })
          
//           // let op = deaths.map((e, i) => {
//             //   let temp = cases.find((element) => element.country === e.country && element.week === e.week);
//             //   if (temp.cases) {
//               //     e.cases = temp.cases;
//               //   }
//               //   return e;
//               callback(deaths)
//               console.log(cases)
//             });

//     } 
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
