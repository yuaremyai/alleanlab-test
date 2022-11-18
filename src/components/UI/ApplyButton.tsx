import React from 'react'

interface Props{
  hideOnMobile?: boolean
}

function ApplyButton( {hideOnMobile}:Props ) {

  let styles = `bg-primary text-white rounded-lg px-6 py-3 my-4 w-fit`
  if (hideOnMobile) {
    styles += ' hidden sm:inline-block'
  }

  return (
    <button className={styles}>Apply Now</button>
  )
}

export default ApplyButton