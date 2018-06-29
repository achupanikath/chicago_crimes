import React, { Component } from 'react';

import request from 'superagent';

import ShowBarGraphs from './ShowSelections';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      file : []
  }
}
  handleClick = () => {
    let file=this.state.file;
    request
      .get(`http://localhost:3000/primarylist`)
      .end( (err, res) => {
        if(err){

        } else {
          this.setState({
            file : res.body
          })
        }
      });
  }

  render(){
    return (
      <div>
        <button onClick={this.handleClick}> CLICK FOR THE LIST </button>
        { (this.state.file.length > 0) ? <ShowSelections data={this.state.file}/>
        : 'PLEASE TRY AGAIN. LIST NOT FOUND.'}
      </div>
    );
  }
}
