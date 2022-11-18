import React from 'react'
import { IGeoData, IJob } from '../../../types/types'
import ContactsDetails from './ContactsDetails'
import ContactsName from './ContactsName'
import ContactsStreet from './ContactsStreet'

interface Props {
    geoData: IGeoData
    job: IJob
}

function ContactsTextBlock({geoData, job}: Props) {
  return (
    <div className='text-white z-10 w-full px-16 py-5 space-y-2'>
        <ContactsName job={job} />
        <ContactsStreet geoData={geoData}/>
        <ContactsDetails job={job} />
    </div>
  )
}

export default ContactsTextBlock