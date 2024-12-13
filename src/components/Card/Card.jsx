import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import './Card.css'

const Card = (props) => {

  return (
    <div className='card'>
        <img src= {props.image} alt="service image here" />
        <h1> {props.title} </h1>
        <p> {props.body} </p>
        <FontAwesomeIcon icon={faArrowRight}/>

    </div>
  )
}

export default Card