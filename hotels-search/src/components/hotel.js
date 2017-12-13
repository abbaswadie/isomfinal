import React, { PropTypes, Component } from 'react'
import '../styles/hotel.css'


export default class Hotel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  
    return (
      <div>
    
        <h2> {this.props.Title}</h2>
        <h3> {this.props.Year}</h3>
        <h4> {this.props.imdbID}</h4>
        <img src={this.props.Poster} />
      </div>
    )
  }
}

Hotel.propTypes = {
  name: PropTypes.string.isRequired
}
