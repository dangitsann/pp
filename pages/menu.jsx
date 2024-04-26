import React from 'react'
import Hero from '@/components/Hero'
import HeroMenu from '@/components/Hero-menu'
import { Document } from 'react-pdf'

const menu = () => {
  return (
    
    <div>
        <Hero heading =''/>
        <div className='p-5 mt-[-50rem] text-white z-[3]  flex items-center justify-center '>
          <HeroMenu drinkName = "Mai Tai" drinkDescription= 'Embark on an exotic journey as you explore this tiki staple. Rum, lime, orgeat, curaçao.' />
        </div>
        <div className='p-5 text-white z-[2]  flex items-center justify-center '>
          <HeroMenu drinkName = "Clarified Missionary's Downfall" drinkDescription= 'Invented by Donn Beach, this classic Tiki cocktail is a refreshing mix of white rum, mint, pineapple, and peach liqueur.' />
        </div>
        
       
    </div>
  )
}

export default menu
