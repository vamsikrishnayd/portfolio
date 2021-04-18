import {Component} from 'react'

import './index.css'

const navBarItems = [
  {
    id: 0,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/home-img.png',
    name: 'HOME',
  },
  {
    id: 1,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/about-img.png',
    name: 'ABOUT',
  },
  {
    id: 2,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/projects-img.png',
    name: 'PROJECTS',
  },
  {
    id: 3,
    iconUrl: 'https://assets.ccbp.in/frontend/react-js/person-img.png',
    name: 'CONTACT',
  },
]

class NavBar extends Component {
  renderNavItems = () => {
    const {onClickSelectId, imageId} = this.props

    return navBarItems.map(eachItem => {
      const {id, iconUrl, name} = eachItem
      const updateImageId = () => {
        onClickSelectId(id)
      }

      const btnName =
        id === imageId ? 'navbar-items navbar-items1' : 'navbar-items'

      return (
        <li key={id} className={btnName} onClick={updateImageId}>
          <img src={iconUrl} alt="navbarItems" className="icon" />
          <p className="icon-title">{name}</p>
        </li>
      )
    })
  }

  render() {
    return (
      <div className="navbar-container">
        <ul className="navbar-items-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/portfolio-profile-img.png"
            alt="profile"
            className="profile-img"
          />
          {this.renderNavItems()}
        </ul>
      </div>
    )
  }
}

export default NavBar
