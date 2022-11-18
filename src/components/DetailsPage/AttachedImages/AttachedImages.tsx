import React from 'react'
import { IJob } from '../../../types/types'
import ComponentHeader from '../../UI/ComponentHeader'
import ImagesBlock from './ImagesBlock'

interface Props {
  job: IJob
}

function AttachedImages({job}:Props) {
  return (
    <div className='w-full py-2 my-4 text-primary'>
        <ComponentHeader>Attached images</ComponentHeader>
        <ImagesBlock job={job}/>
    </div>
  )
}

export default AttachedImages