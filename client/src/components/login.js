import React, { Component } from "react";
import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBModalFooter,MDBIcon, MDBCardHeader,MDBBtn} from "mdbreact";
import "../styles/login.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import firebase from 'firebase';
import {Link} from 'react-router-dom';

// const Login = () => 
class Login extends Component {
    state = {
        email:'',
        password: '',
        login: ''
    };
    onSubmit = (event) => {
        event.preventDefault();
        const user = firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then((user) => {
            this.props.history.push('/upload');

        })
        .catch((err) => {
            console.log(err)
        });
    };    
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
                {/* TITULO DE LOGIN */}
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Login:
                </h3> 
              </MDBCardHeader>
              {/* LEYENDA DE YOUR EMAIL */}
              <form onSubmit={this.onSubmit}>
              <label
                htmlFor="defaultFormEmailEx"
                className="grey-text font-weight-light">
                Your email
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
                Your password
              </label>
              <input onChange={this.handleChange}
                type="password"
                name = "password"
                id="defaultFormPasswordEx"
                className="form-control"
              />

              <div className="text-center mt-4">
                <MDBBtn color="deep-orange" className="mb-3" type="submit">
                  Login
                </MDBBtn>
              </div>
              </form>

              <MDBModalFooter>
                <div className="font-weight-light">
                  <p>Not a member? <Link to = '/registry' >Request Access</Link></p>
                  <p>Forgot Password?</p>
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

export default Login;