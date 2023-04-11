import React from 'react'
import starIcon from '../assets/icon-star.svg'
import {motion} from 'framer-motion'

const RatingCard = ({handleClick, handleSubmit, rating}) => {
  return (
    <motion.div
    initial={{x: -1000}}
    animate={{x: 0}}
    transition={{duration: .3}}
    
      className='text-LightGrey bg-DarkBlue w-[400px] flex flex-col justify-center items-center gap-5 p-8 rounded-2xl'>
      <img src={starIcon} alt="start" className='self-start bg-LightGrey p-4 bg-opacity-10 rounded-full'/>
      <h1 className='font-bold text-[20px] self-start text-white'>How did we do?</h1>
      <p>Please let us know how we did with your support request. All feedback is appreciated to help us imporve our offering!</p>
      <div className='flex justify-between items-center w-full'>
        <span onClick={handleClick} id='1' className={`p-2 ${rating[0].isSelected ? `text-white bg-MediumGrey` : `bg-LightGrey bg-opacity-10` } rounded-full w-12 h-12 text-center flex justify-center items-center leading-none font-bold hover:bg-Orange hover:text-white cursor-pointer`}>1</span>
        <span onClick={handleClick} id='2' className={`p-2 ${rating[1].isSelected ? `text-white bg-MediumGrey` : `bg-LightGrey bg-opacity-10` } rounded-full w-12 h-12 text-center flex justify-center items-center leading-none font-bold hover:bg-Orange hover:text-white cursor-pointer`}>2</span>
        <span onClick={handleClick} id='3' className={`p-2 ${rating[2].isSelected ? `text-white bg-MediumGrey` : `bg-LightGrey bg-opacity-10` } rounded-full w-12 h-12 text-center flex justify-center items-center leading-none font-bold hover:bg-Orange hover:text-white cursor-pointer`}>3</span>
        <span onClick={handleClick} id='4' className={`p-2 ${rating[3].isSelected ? `text-white bg-MediumGrey` : `bg-LightGrey bg-opacity-10` } rounded-full w-12 h-12 text-center flex justify-center items-center leading-none font-bold hover:bg-Orange hover:text-white cursor-pointer`}>4</span>
        <span onClick={handleClick} id='5' className={`p-2 ${rating[4].isSelected ? `text-white bg-MediumGrey` : `bg-LightGrey bg-opacity-10` } rounded-full w-12 h-12 text-center flex justify-center items-center leading-none font-bold hover:bg-Orange hover:text-white cursor-pointer`}>5</span>
      </div>
      <button onClick={handleSubmit} className='bg-Orange text-white w-full rounded-full flex justify-center items-center h-12 leading-none hover:bg-white hover:text-Orange'>SUBMIT</button>
    </motion.div>
  )
}

export default RatingCard