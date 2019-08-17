import React from 'react';
import { MDBDataTable, MDBBtn } from 'mdbreact';
import "../styles/login.css";
import { ApiSubscribe } from "../api";


export function TablePage({ finData }) {
 
  finData.forEach(element => {
    const id = element._id;
    element._id =
    <ApiSubscribe>
    {api => (
      <MDBBtn active color="primary" size='sm' type="button" id={id}  onClick={ () => api.modalShow(id)}>Add Comment</MDBBtn>
    )}
    </ApiSubscribe>
  });
  
  const data = {
    columns: [
      {

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
      },
      {
        'label': 'Inside',
        'field': 'commet',
        'sort': 'asc'
      }
    ],
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
