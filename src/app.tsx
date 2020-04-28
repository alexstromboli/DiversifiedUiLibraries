import * as React from 'react'
import ReactDOM from 'react-dom';

import { List, Data } from './data';

import { DisplayBareHtml } from './display_barehtml';
import { DisplayKendoUI } from './display_kendoui';
import { DisplaySyncFusion } from './display_syncfusion';

enum Mode
{
  BareHtml,
  KendoUI,
  SyncFusion
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

  menu_link (mode: Mode, display: string)
  {
    return <li
        style={{padding: "1em", backgroundColor: this.state.current == mode ? "white" : "transparent" }}
      ><a href="#" onClick={e => {e.preventDefault(); this.setState ({...this.state, current: mode}); }}>{display}</a></li>;
  }

  render ()
  {
    return [
      <div id="left_panel" style={{float: "left", width: "200px", height: "90vh", padding: "1em", backgroundColor: "#f2f2f2"}}>
        <style>{"li {display: block;} a:link, a:visited, a:hover, a:active {	color: blue; text-decoration: none; }"}</style>
        <ul>
          { this.menu_link (Mode.BareHtml, "Bare HTML") }
          { this.menu_link (Mode.KendoUI, "Kendo UI") }
          { this.menu_link (Mode.SyncFusion, "SyncFusion") }
        </ul>
      </div>,
    
      <div id="demo" style={{overflow: "hidden", padding: "3em 4em"}}>
        {
          this.state.current == Mode.BareHtml
          ? <DisplayBareHtml {...this.props} />
          : this.state.current == Mode.KendoUI
          ? <DisplayKendoUI {...this.props} />
          : this.state.current == Mode.SyncFusion
          ? <DisplaySyncFusion {...this.props} />
          : <div>none</div>
        }
      </div>
    ]
  }
}

ReactDOM.render(<App cities={Data} />, document.getElementById('app'));
