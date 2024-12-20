import React from 'react'

const Offices = (props) => {
  return (
    <div>
        <div className="office">
            <img src= {props.image} alt="an image here" />
            <h1> {props.officeName} </h1>
            <p> {props.officeEmail} </p>
            <p> { props.officePhone } </p>
        </div>
    </div>
  )
}

export default Offices