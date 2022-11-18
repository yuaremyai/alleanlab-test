import React from 'react'
import { IJob } from '../../../types/types'

interface Props {
    job: IJob
}

function ContactsDetails({job}: Props) {
  return (
    <div>
        <p>{job.phone}</p>
        <p>{job.email}</p>
    </div>
  )
}

export default ContactsDetails