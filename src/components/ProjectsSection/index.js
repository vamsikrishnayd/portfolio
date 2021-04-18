import {Component} from 'react'

import './index.css'

const projectsData = [
  {
    id: 0,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/advanced-technologies-img.png',
    name: 'Advanced Technologies',
  },
  {
    id: 1,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/your-moment-is-complete-img.png',
    name: 'Your Moment Is Complete',
  },
  {
    id: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/robotics-img.png',
    name: 'Robotics',
  },
  {
    id: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-meals-img.png',
    name: 'Happy Meals',
  },
]

class ProjectsSection extends Component {
  render() {
    return (
      <div className="project-section-container">
        <h1 className="projects-heading">My Work</h1>
        <div className="projects-card">
          <div key={projectsData[0].id} className="each-project">
            <img
              src={projectsData[0].imageUrl}
              className="projects-image"
              alt="project"
            />
            <p className="project-title">{projectsData[0].name}</p>
          </div>
          <div key={projectsData[1].id}>
            <img
              src={projectsData[1].imageUrl}
              className="projects-image"
              alt="project"
            />
            <p className="project-title">{projectsData[1].name}</p>
          </div>
        </div>
        <div className="projects-card">
          <div key={projectsData[2].id} className="each-project">
            <img
              src={projectsData[2].imageUrl}
              className="projects-image"
              alt="project"
            />
            <p className="project-title">{projectsData[2].name}</p>
          </div>
          <div key={projectsData[3].id}>
            <img
              src={projectsData[3].imageUrl}
              className="projects-image"
              alt="project"
            />
            <p className="project-title">{projectsData[3].name}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectsSection
