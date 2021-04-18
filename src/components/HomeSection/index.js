import {Component} from 'react'

import './index.css'

class HomeSection extends Component {
  render() {
    return (
      <div className="home-section-container">
        <div className="items">
          <h1 className="heading">Sophie Millers</h1>
          <p className="role">Full Stack Developer</p>
          <p className="skills">
            Experienced in MongoDB, Express, ReactJS and
            <br /> Node.js, Bootstrap, HTML, CSS, SQL and Python.
          </p>
          <button type="button" className="button">
            View Resume
          </button>
        </div>
      </div>
    )
  }
}

export default HomeSection
