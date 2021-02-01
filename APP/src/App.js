import React from "react";
import Particles from "react-particles-js";
import "./App.css";

const particlesOptions = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      data: [],
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:3001/getCountries")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ countries: response });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleSelect = (event) => {
    let url = new URL("http://localhost:3001/" + event.target.value);
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ data: response });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        <Particles className="particles" params={particlesOptions} />
        <div className="tc content">
          <h1> Pick a country </h1>
          <label>
            <select
              onChange={this.handleSelect}
              className="pa2 ba b--green bg=lighest-blue"
            >
              {this.state.countries.map((country) => (
                <option key={country} value={country}>
                  {country}{" "}
                </option>
              ))}
            </select>
          </label>
          <div className="pa4">
            <div className="overflow-auto">
              <table className="fw4 w-100 mw6 center" cellSpacing="0">
                <thead>
                  <tr>
                    <th className="fw8 tc bb b--black-20 tl pb3 pr3 0-50 ">
                      Year-Week
                    </th>
                    <th className="fw8 tc bb b--black-20 tl pb3 pr3 ">
                      Deaths
                    </th>
                    <th className="fw8 tc bb b--black-20 tl pb3 pr3 ">Cases</th>
                  </tr>
                </thead>
                <tbody className="lh-copy">
                  {this.state.data.length > 0 ? (
                    this.state.data.map((dat, index) => {
                      return (
                        <tr key={index}>
                          <td className="tc pv1 pr3 bb b--black-20">
                            {dat.week}
                          </td>
                          <td className="tc pv1 pr3 bb b--black-20">
                            {dat.deaths}
                          </td>
                          <td className="tc pv1 pr3 bb b--black-20">
                            {dat.cases}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td> </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default App;
