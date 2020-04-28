import * as React from 'react'

import { List } from './data';

export class DisplayBareHtml extends React.Component<List, any>
{
  render ()
  {
    return [
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
            ];
  }
}
