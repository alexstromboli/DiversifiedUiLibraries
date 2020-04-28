import * as React from 'react'

import './syncfusion.css';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';

import { List } from './data';

export class DisplaySyncFusion extends React.Component<List, any>
{
  render ()
  {
    return <GridComponent dataSource={this.props.cities}>
            <ColumnsDirective>
                <ColumnDirective field='name' width='100' />
                <ColumnDirective field='province' width='100' />
                <ColumnDirective field='population' width='100' />
            </ColumnsDirective>
        </GridComponent>
      ;
  }
}
