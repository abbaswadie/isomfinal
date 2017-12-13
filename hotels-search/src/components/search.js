import React, { Component } from 'react'
import '../styles/search.css'

export default class Search extends Component {
  render() {
    const { onClick } = this.props;
    return (

    <div>
     <div className="col-lg-6">
      <div className="input-group">
        <input type="text" className="form-control" name='s' placeholder="Search for...">
        </input>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={onClick}>Search</button>
        </span>
      </div>
    </div>
    </div>
    )
  }
}