import React from 'react';
import './App.css';
import {Component} from "react";
import axios from "axios";
import BulkUpload from './pages/bulkUpload';
import Login from "./components/login";
import Registry from "./components/registry";
import {BrowserRouter, Route, Switch} from 'react-router-dom';



class App extends Component{
  constructor (props)   {
    super(props);
  
    this.state = {
      file: null
    }
  }

onChangeHandler=event=>{
  this.setState({
    file: event.target.files[0],
    loaded:0,
  })
}

onClickHandler = () => {
    const data = new FormData()
    data.append('file', this.state.selectedFile)
  axios.post("http://localhost:3000/upload", data, { // receive two parameter endpoint url ,form data 
  })}



render() {
  return (
    <div>
    {/* <BulkUpload>
    </BulkUpload>

    <Login>
    </Login> */}

    <BrowserRouter>
    <div className="App">
    <Switch>
    <Route path='/login' component={Login} />
    <Route path='/upload' component={BulkUpload} />
    <Route path='/registry' component={Registry} />
    <Route path='/' component={Login} />
    </Switch>
    </div>
    </BrowserRouter>
    </div>
  )  

}
}

export default App;
