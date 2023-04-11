import React from 'react'
import Thanks from '../assets/illustration-thank-you.svg'
import {motion} from 'framer-motion'

const ThanksCard = ({rating, changeMinde}) => {

  const selectedRate = rating.filter(obj => {
    return obj.isSelected
  })
  
  return (
    <motion.div
      initial={{x: 1000}}
      animate={{x: 0}}
      transition={{duration: .3}}

      className='text-LightGrey bg-DarkBlue w-[400px] flex flex-col justify-center items-center gap-5 p-8 rounded-2xl'>
      <img src={Thanks} alt="thankYou" />
      <p className='bg-MediumGrey bg-opacity-20 text-Orange p-3 px-8 rounded-full leading-none'>{`You selected ${selectedRate[0].id + 1} out of 5`}</p>
      <h1 className='font-bold text-white text-[24px]'>Thank you!</h1>
      <p className='text-center'>We appreciate you taking the tiem to give a rating. If you ever need more support, dont't hesitate to get in touch!</p>
      <button onClick={changeMinde} className='bg-Orange text-white w-full rounded-full flex justify-center items-center h-12 leading-none hover:bg-white hover:text-Orange'>Changed your mind?</button>

    </motion.div>
  )
}

export default ThanksCard