import * as React from 'react'
import ReactDOM from 'react-dom';

import { List, Data } from './data';

enum Mode
{
  BareHtml,
  KendoUI
}

class AppState
{
  current: Mode
}

class App extends React.Component<List, AppState>
{
  state = {
    current: Mode.BareHtml
  };

  render ()
  {
    return [
      <div id="left_panel" style={{float: "left", width: "300px", height: "90vh", padding: "2em", backgroundColor: "#f2f2f2"}}>
        <ul>
          <li><a href="#" onClick={e => this.setState ({...this.state, current: Mode.BareHtml})}>Bare HTML</a></li>
          <li><a href="#" onClick={e => this.setState ({...this.state, current: Mode.KendoUI})}>Kendo UI</a></li>
        </ul>
      </div>,
    
      <div id="demo" style={{height: "100vh", overflow: "hidden", position: "relative", padding: "3em 4em"}}>
        {
          this.state.current == Mode.BareHtml
          ?
            [
              <style>{"table {border:1px solid black;} table td {width: 8em}"}</style>,
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
            ]
          : <div>none</div>
        }
      </div>
    ]
  }
}

ReactDOM.render(<App cities={Data} />, document.getElementById('app'));
