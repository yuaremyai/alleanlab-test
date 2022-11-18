import React from 'react'
import { useNavigate } from 'react-router-dom'
import arrow from '../../images/ReturnArrow.svg'

function ReturnButton() {
  
  let navigate = useNavigate()

  function handleClick(){
    navigate('/')
  }

  return (
    <div onClick={handleClick} className='sm:flex relative -left-10 items-center hidden bg-secondary py-3 px-5 rounded-md space-x-4 cursor-pointer'>
        <img src={arrow} alt='' className='w-2'/>
        <p className='text-xs font-medium '>RETURN TO JOB BOARD</p>
    </div>
  )
}

export default ReturnButton