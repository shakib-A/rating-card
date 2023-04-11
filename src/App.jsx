import React, { useState } from 'react'
import RatingCard from './components/RatingCard'
import ThanksCard from './components/ThanksCard'

const App = () => {

  const [rating, setRating] = useState([
    {
      id: 0,
      isSelected: false
    },
    {
      id: 1,
      isSelected: false
    },
    {
      id: 2,
      isSelected: true
    },
    {
      id: 3,
      isSelected: false
    },
    {
      id: 4,
      isSelected: false
    },
  ])

  const [isSubmited, setIsSubmited] = useState(false)

  const handleClick = (e) => {
    const rateNumber = parseInt(e.target.id) -1
    const newRating = rating.map(obj => {
      if(obj.id === rateNumber) {
        return {...obj, isSelected: true}
      } else {
        return {...obj, isSelected: false}
      }
    }) 
    setRating(newRating)
  }

  const changeMinde = () => {
    setIsSubmited(false)
  }

  const handleSubmit = () => {
    setIsSubmited(true)
  }

  return (
    <main className='bg-VeryDarkBlue w-full h-screen flex justify-center items-center'>
      {!isSubmited && <RatingCard
        handleClick={handleClick}
        handleSubmit={handleSubmit}
        rating={rating}
      />}
      {isSubmited && <ThanksCard
        changeMinde={changeMinde}
        rating={rating}
      />}
    </main>
  )
}

export default App