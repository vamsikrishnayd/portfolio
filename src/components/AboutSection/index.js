import {Component} from 'react'

import './index.css'

const skillsData = [
  {
    id: 0,
    name: 'HTML',
  },
  {
    id: 1,
    name: 'Java Script',
  },
  {
    id: 2,
    name: 'CSS',
  },
  {
    id: 3,
    name: 'Java',
  },
  {
    id: 4,
    name: 'Python',
  },
  {
    id: 5,
    name: 'React',
  },
  {
    id: 6,
    name: 'Node',
  },

  {
    id: 7,
    name: 'Bootstrap',
  },
]

const educationData = [
  {
    id: 0,
    qualification: 'Graduation',
    qualificationSource: 'B.Tech(Computer Science)',
  },
  {
    id: 1,
    qualification: 'Intermediate',
    qualificationSource: 'St.Ann’s Jr College',
  },
  {
    id: 2,
    qualification: 'High School',
    qualificationSource: 'Kimberley EM School',
  },
]

class AboutSection extends Component {
  render() {
    return (
      <div className="about-section-bg-container">
        <h1 className="about-heading">About</h1>
        <p className="about-info">
          I started my journey in the world of computers from a young age, now I
          m 21years old, pursuing my Computers Science majors at Santa Clara
          University, USA. Web development is my center of interest.
        </p>
        <div className="about-section-card">
          <div>
            <h1 className="title1">Education</h1>
            <ul className="education-list">
              {educationData.map(eachData => (
                <li key={eachData.id}>
                  <h1 className="education">{eachData.qualification}</h1>
                  <p className="degree">{eachData.qualificationSource}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="skills-size">
            <h1 className="title1">Skills</h1>
            <ul className="skills-list">
              {skillsData.map(eachData => (
                <li key={eachData.id}>
                  <h1 className="skills-title">{eachData.name}</h1>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutSection
