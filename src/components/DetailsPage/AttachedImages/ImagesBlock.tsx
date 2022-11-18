import React from 'react'
import { IJob } from '../../../types/types'

interface Props {
  job: IJob
}

function ImagesBlock({job}:Props) {
  return (
    <div className='flex space-x-2 sm:overflow-auto overflow-scroll my-4'>
        {job.pictures.map((link, index )=>{
            return <img key={index} src={link} alt='' className='rounded-lg'/>
        })}
    </div>
  )
}

export default ImagesBlock