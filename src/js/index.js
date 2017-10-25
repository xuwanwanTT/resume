import '../css/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import PersonInfo from './person-info'
import PersonWorks from './person-works'
import PersonSkills from './person-skills'
import Scroll from './scroll'

ReactDOM.render(
  <div className="page">
    <PersonInfo />
    <PersonWorks />
    <PersonSkills />
  </div>,
  document.querySelector('#root')
)

new Scroll(document.querySelector('.page'))