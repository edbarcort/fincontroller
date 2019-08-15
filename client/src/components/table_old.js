import React from 'react';
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead , MDBDataTable } from 'mdbreact';
import "../styles/login.css";
export function TablePage({finData}){
    finData.forEach(element => {
      element._id= <MDBInput label=" " type="checkbox" id={element._id} value={element._id}/>;
    });
    const data_panel = {
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

      return(
        <MDBCard narrow>
          <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
            <div>
              {/* <MDBBtn outline rounded size="sm" color="white" className="px-2">
                <i className="fa fa-th-large mt-0"></i>
              </MDBBtn>
              <MDBBtn outline rounded size="sm" color="white" className="px-2">
                <i className="fa fa-columns mt-0"></i>
              </MDBBtn> */}
            </div>
            <a href="#" className="white-text mx-3">Financials Table</a>
            <div>
              <MDBBtn outline rounded size="sm" color="white" className="px-2">
                <i className="fas fa-pencil-alt mt-0"></i>
              </MDBBtn>
              {/* <MDBBtn outline rounded size="sm" color="white" className="px-2">
                <i className="fas fa-times mt-0"></i>
              </MDBBtn>
              <MDBBtn outline rounded size="sm" color="white" className="px-2">
                <i className="fa fa-info-circle mt-0"></i>
              </MDBBtn> */}
            </div>
          </MDBCardHeader>
          <MDBCardBody cascade key>
            <MDBTable btn fixed scrollY maxHeight='400px' >
              <MDBTableHead columns={data_panel.columns} />
              <MDBTableBody rows={data_panel.rows} />
            </MDBTable>
          </MDBCardBody>
        </MDBCard>

 
      );

}
