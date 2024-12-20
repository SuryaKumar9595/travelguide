import React from 'react'
import './Card.css'

const Card = ({name, description, imageUrl}) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} className="card-image" />
      <h2 className="card-title">{name}</h2>
      <p className="card-description">{description}</p>
    </div>
  )
}

export default Card
