import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput, MDBIcon } from 'mdbreact';
import { ApiSubscribe } from "../api";
class ModalPage extends Component {




render() {
  return (
    <ApiSubscribe>
    {api => (
      <MDBContainer>
        <MDBModal isOpen={api.state.modalSate} toggle={() => api.modalHide()} side fullHeight position="left" size="md" >
          <MDBModalHeader toggle={() => api.modalHide()}>Inside</MDBModalHeader>
          <MDBModalBody>
            <MDBInput type="textarea" id="comment" label="Type your comment" rows="10" />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={() => api.modalHide()}>Close</MDBBtn>
            <MDBBtn color="primary" onClick={() => api.updateReport(document.getElementById("comment").value)}>Save changes <MDBIcon icon="save" className="ml-1" /></MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
       )}
       </ApiSubscribe>
    );
  }
}

export default ModalPage;