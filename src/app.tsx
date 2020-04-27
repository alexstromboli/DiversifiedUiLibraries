import * as React from 'react'
import ReactDOM from 'react-dom';

import { List, Data } from './data';
import { DisplayBareHtml } from './display_barehtml';

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
      <div id="left_panel" style={{float: "left", width: "200px", height: "90vh", padding: "1.5em", backgroundColor: "#f2f2f2"}}>
        <style>{"li {display: block; margin: 1em 0;} a:link, a:visited, a:hover, a:active {	color: blue; text-decoration: none; }"}</style>
        <ul>
          <li><a href="#" onClick={e => this.setState ({...this.state, current: Mode.BareHtml})}>Bare HTML</a></li>
          <li><a href="#" onClick={e => this.setState ({...this.state, current: Mode.KendoUI})}>Kendo UI</a></li>
        </ul>
      </div>,
    
      <div id="demo" style={{height: "100vh", overflow: "hidden", position: "relative", padding: "3em 4em"}}>
        {
          this.state.current == Mode.BareHtml
          ? <DisplayBareHtml {...this.props} />
          : <div>none</div>
        }
      </div>
    ]
  }
}

ReactDOM.render(<App cities={Data} />, document.getElementById('app'));
