import {Component} from 'react'

import './index.css'

class ContactSection extends Component {
  render() {
    return (
      <div className="contact-section-container">
        <h1 className="contact-heading">My Contact</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/location-img.png"
          className="map-image"
          alt="maps"
        />
        <p className="contact-info">
          If you like my projects and interested to do work with me. Please
          contact...
        </p>
        <h1 className="contact-title">Please Contact:</h1>
        <p className="number">9123456789</p>
        <p className="number">sophie.millers@gmail.com</p>
      </div>
    )
  }
}

export default ContactSection
