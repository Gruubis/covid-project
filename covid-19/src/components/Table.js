// import React from "react";

// class Table extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: []
//         }
//     }
// onSelect = () => {
//     fetch('http://localhost:3000/getData')
//     .then(res => res.json())
//     .then(json => json.data)
//     .then(data => this.setState({data}))
// } 
// }
// const Table = ({data}) => {
//   return (
//     <table>
//       <thead className="tc">
//         <tr>
//           <th>Year/week</th>
//           <th>Deaths</th>
//           <th>Cases</th>
//         </tr>
//       </thead>
//       <tbody>
//           {(data.length >0 ? data.map(( dat, index ) => {
//               return(
//             <tr key={index}>
//           <td>{dat.week}</td>
//           <td>{dat.weekly_count}</td>
//           <td>{dat.indicator}</td>

//         </tr>
//               )
//           }): <tr> <td> LOADING...</td></tr>}
        
//       </tbody>
//     </table>
//   );
// };

// export default Table;
