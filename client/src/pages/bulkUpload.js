import React from 'react';
import '../App.css';
import { Component } from "react";
import { MDBInputGroup, MDBBtn} from "mdbreact";
import axios from "axios";
import { TablePage } from "../components/table"
import API from "../utils/api.js"


class bulkUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      uploaded: false,
      finData: []
    }
  }

  componentDidMount() {
    this.getInfo();
  }

  getInfo = () => {
    API.getFin()
      .then(res => this.setState({
        finData: res.data
      }))
      .catch(err => console.log(err));
  };

  onChangeHandler = event => {
    this.setState({
      file: event.target.files[0],
      loaded: 0,
    })
  }

  onClickHandler = () => {
    const data = new FormData()
    data.append('file', this.state.file)
    axios.post("/upload", data)
      .then(res => { // then print response status
        console.log(res.statusText)
        console.log(res)
        if (res.statusText === "OK") {
          this.setState({
            uploaded: true,

          })
        }
        this.getInfo();
      })
  }

  render() {
    return (
      <div className="container">

        <div className='container bg-light' onSubmit={this.onFormSubmit}>
          <h1> Bulk upload </h1> {this.state.uploaded ? <h1 className="text-success">Completed</h1> : " "}

          <MDBInputGroup
            append={
              <MDBBtn
                active color="primary"
                className="m-0 px-3 py-2 z-depth-0"
                onClick={this.onClickHandler}
              >
                Upload
            </MDBBtn>
            }
            inputs={
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile01"
                  name="file"
                  onChange={this.onChangeHandler}
                />
                <label className="custom-file-label" htmlFor="inputGroupFile01">
                  {
                    this.state.file ? <div>{this.state.file.name}</div> : " No file seleced"
                  }
                </label>
              </div>
            }
            containerClassName="mb-3"
          />
        </div>
        <div className='container bg-light'>
          <h1> Financial Reports</h1>
          <TablePage finData={this.state.finData}></TablePage>
        </div>

      </div>

    )
  }
}


export default bulkUpload;
