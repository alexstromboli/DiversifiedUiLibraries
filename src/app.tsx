import * as React from 'react'
import ReactDOM from 'react-dom';

import { List, Data } from './data';

class App extends React.Component<List, any>
{
  render ()
  {
    return [
      <div id="left_panel" style={{float: "left", width: "300px", height: "90vh", padding: "2em", backgroundColor: "#f2f2f2"}}>
      </div>,
    
      <div id="demo" style={{height: "100vh", overflow: "hidden", position: "relative", padding: "3em 4em"}}>
        <style>{"table{border:1px solid black;} table td {width: 8em}"}</style>
        <table>
            <tr>
              <td><b>city</b></td>
              <td><b>province</b></td>
              <td><b>population</b></td>
            </tr>
          { this.props.cities.map (c =>
            <tr>
              <td>{c.name}</td>
              <td>{c.province}</td>
              <td>{c.population}</td>
            </tr>
            )
          }
        </table>
      </div>
    ]
  }
}

ReactDOM.render(<App cities={Data} />, document.getElementById('app'));
