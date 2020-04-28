import * as React from 'react'
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import '@progress/kendo-theme-default/dist/all.css';

import { List } from './data';

export class DisplayKendoUI extends React.Component<List, any>
{
  render ()
  {
    return <Grid
          data={this.props.cities}
          pageable={false}
          sortable={false}
          >
          <GridColumn field="name" title="name" />
          <GridColumn field="province" title="province" />
          <GridColumn field="population" title="population" />
        </Grid>
      ;
  }
}
