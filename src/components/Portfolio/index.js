import {Component} from 'react'

import NavBar from '../NavBar'

import HomeSection from '../HomeSection'

import AboutSection from '../AboutSection'

import ProjectsSection from '../ProjectsSection'

import ContactSection from '../ContactSection'

import SocialMediaSection from '../SocialMediaSection'

import './index.css'

class Portfolio extends Component {
  state = {
    imageId: 0,
  }

  selectImageId = id => {
    this.setState({
      imageId: id,
    })
  }

  renderSections = () => {
    const {imageId} = this.state

    switch (imageId) {
      case 1:
        return <AboutSection />
      case 2:
        return <ProjectsSection />
      case 3:
        return <ContactSection />
      default:
        return <HomeSection />
    }
  }

  render() {
    const {imageId} = this.state
    return (
      <div className="bg-container">
        <NavBar onClickSelectId={this.selectImageId} imageId={imageId} />
        <div>
          {this.renderSections()}
          <SocialMediaSection />
        </div>
      </div>
    )
  }
}

export default Portfolio
