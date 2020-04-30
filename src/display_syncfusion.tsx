import * as React from 'react'

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
const text_css: string =
    require ('raw-loader!@syncfusion/ej2-base/styles/material.css').default
    + "\n"
    + require ('raw-loader!@syncfusion/ej2-react-grids/styles/material.css').default
    ;

import { List } from './data';

class DisplaySyncFusion extends React.Component<List, any>
{
  render ()
  {
    return <div>
        <style>
          {text_css}
        </style>
        <GridComponent dataSource={this.props.cities}>
            <ColumnsDirective>
                <ColumnDirective field='name' width='100' />
                <ColumnDirective field='province' width='100' />
                <ColumnDirective field='population' width='100' />
            </ColumnsDirective>
        </GridComponent>
      </div>
      ;
  }
}

export default DisplaySyncFusion;
