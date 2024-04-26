import React from 'react'

const HeroMenu = ({drinkName, drinkDescription, drinkIntensity}) => {
    return (
        <div>
            <h2 className = 'text-5xl fond-bold>'>{drinkName}</h2>
            <p className = 'py-5 px-5 text-xl'>{drinkDescription}</p>
        </div>
    )
  }

export default HeroMenu;