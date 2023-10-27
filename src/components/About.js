import React from 'react'

function About(props) {
    const image="https://via.placeholder.com/215"
  return (
    <aside>
        <img src={props.image} alt={props.blog}/>
        <p>{props.about}</p>
    </aside>
  )
}

export default About