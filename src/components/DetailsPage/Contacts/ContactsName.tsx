import React from 'react'
import { IJob } from '../../../types/types'

interface Props{
    job: IJob
}

function ContactsName({job}: Props) {
  return (
    <div className='font-bold z-10'>
        <p>Department name.</p>
        <p>{job.name}</p>
    </div>
  )
}

export default ContactsName