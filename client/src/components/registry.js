import React, { Component } from "react";
import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBModalFooter,MDBIcon, MDBCardHeader,MDBBtn} from "mdbreact";
import "../styles/login.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import firebase from 'firebase';
import {Link} from 'react-router-dom';
// const Login = () => 
class Registry extends Component {
    state = {
        email:'',
        password: '',
        registry: '',
        error: '',
    };
    onSubmit = (event) => {
        event.preventDefault();
        const user = firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then((user) => {
            this.props.history.push('/login');
        })
        .catch((error) => {
          var errorMessage = error.code;
          switch(errorMessage) {
              case "auth/weak-password": 
              this.setState({error: "Password should be at least 6 characters"})
              break;
              case "auth/email-already-in-use": 
              this.setState({error: "Email Already in Use"})
              break;
          }
        });
        }
     
        // "auth/weak-password"  "Password should be at least 6 characters
        // : "auth/email-already-in-use", message: "The email address is already in use by another account."}
     
    handleChange = (event) => {
        const field = event.target.name; 
        const value = event.target.value;
        this.state[field] = value
        console.log(this.state)
        console.log('F' +field, 'V' + value);
    }
    render() {
  return (
   <div className="container center">
    <MDBContainer>
      <MDBRow className="loginCard">
      <MDBCol md="3"> </MDBCol>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="form-header peach-gradient rounded">
                {/* TITULO DE REGISTRY */}
                <h3 className="my-3">
                  <MDBIcon icon="users" /> Registry:
                </h3> 
              </MDBCardHeader>
              {/* LEYENDA DE YOUR EMAIL */}
              <form onSubmit={this.onSubmit}>
              <label
                htmlFor="defaultFormEmailEx"
                className="grey-text font-weight-light">
                Enter new email
              </label>
              <input onChange={this.handleChange}
                type="email"
                name = "email"
                id="defaultFormEmailEx"
                className="form-control"
              />
            {/* LEYENDA DE YOUR PASSWORD */}
              <label
                htmlFor="defaultFormPasswordEx"
                className="grey-text font-weight-light"
              >
                Set Password
              </label>
              <input onChange={this.handleChange}
                type="password"
                name = "password"
                id="defaultFormPasswordEx"
                className="form-control"
              />
              <div className="text-center mt-4">
                <MDBBtn color="deep-orange" className="mb-3" type="submit">
                  Submit
                </MDBBtn>
              </div>
              </form>
              <MDBModalFooter>
                <div className="font-weight-light">
                  <p><Link to = '/login' >Login</Link></p>
                  <p className="errorLogin">{this.state.error}</p>
                  <p></p>
                </div>         
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="3"> </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
};
}
export default Registry;