import React from 'react';
import { MDBDataTable, MDBInput, MDBBtn } from 'mdbreact';
import "../styles/login.css";
export function TablePage({ finData }) {
  finData.forEach(element => {
    element._id = <MDBBtn active color="primary" size='sm' type="button" id={element._id} value={element._id}>Add Comment</MDBBtn>;
  });
  const data = {
    columns: [
      {
        // 'label': <MDBInput label=" " type="checkbox" id="checkbox5" />,
        // 'field': 'check',
        // 'sort': 'asc'
      },
      {
        'label': 'Business Unit',
        'field': 'sbu',
        'sort': 'asc'
      },
      {
        'label': 'Region',
        'field': 'region',
        'sort': 'asc'
      },
      {
        'label': 'Period',
        'field': 'period',
        'sort': 'asc'
      },
      {
        'label': 'Previous Year',
        'field': 'py',
        'sort': 'asc'
      },
      {
        'label': 'Plan',
        'field': 'pl',
        'sort': 'asc'
      },
      {
        'label': 'Rolling Forecast',
        'field': 'rfc',
        'sort': 'asc'
      }
    ],
    // rows: [
    //   {
    //     'check': <MDBInput label=" " type="checkbox" id="checkbox6" />,
    //     'sbu': 'Adhesives',
    //     'region': 'Americas',
    //     'period': '2019-01',
    //     'py': '3%',
    //     'pl': '-2%',
    //     'rfc': '1%'
    //   }
    //]
    rows: finData
  };

  return (


    <MDBDataTable
      striped
      hover
      tbodyColor='white'
      theadColor="dark"
      theadTextWhite
      data={data}
    />
  );

}
