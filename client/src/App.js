import React from 'react';
import './App.css';
import {Component} from "react";
import axios from "axios"


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
    data.append('file', this.state.file)
  axios.post("http://localhost:3000/upload", data, { // receive two parameter endpoint url ,form data 

})
    .then(res => { // then print response status
      console.log(res.statusText)
    })
}

render() {
  return (
    <div onSubmit={this.onFormSubmit}>
      <h1> Bulk upload </h1>
      <input type = "file" name = "file" onChange={this.onChangeHandler} />
      <button onClick={
        this.onClickHandler
      }>
Upload file
      </button>
      </div>
  )  
}
}



export default App;
