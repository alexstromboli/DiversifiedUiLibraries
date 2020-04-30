import * as React from 'react'
import { Grid, GridColumn } from '@progress/kendo-react-grid';
const text_css: string = require ('raw-loader!@progress/kendo-theme-default/dist/all.css').default;

import { List } from './data';

export class DisplayKendoUI extends React.Component<List, any>
{
  render ()
  {
    return <div>
        <style>
          {text_css}
        </style>
        <Grid
          data={this.props.cities}
          pageable={false}
          sortable={false}
          >
          <GridColumn field="name" title="name" />
          <GridColumn field="province" title="province" />
          <GridColumn field="population" title="population" />
        </Grid>
      </div>
      ;
  }
}
