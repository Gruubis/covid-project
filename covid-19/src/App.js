import React from "react";
import { BasicTable } from "./components/BasicTable";
import Table from "./components/Table";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      data: [],
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  async componentDidMount() {
    const url = "http://localhost:3000/getCountries";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ countries: data });
  }
  handleSelect = (event) => {
  let url = new URL("http://localhost:3000/"+ event.target.value);
 fetch(url)
 .then(response => response.json())
 .then(response => {
   this.setState({ data: response})
  console.log(response)
  })
  
  };
  render() {
    return (
      <div className="tc">
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
        <h2>{this.state.data.country}</h2>
        <table>
          <thead className="tc">
            <tr>
              <th>Year/week</th>
              <th>Deaths</th>
              <th>Cases</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.length > 0 ? (
              this.state.data.map((dat, index) => {
                return (
                  <tr key={index}>
                    <td>{dat.week}</td>
                    <td>{dat.deaths}</td>
                    <td>{dat.cases}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td> LOADING...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
