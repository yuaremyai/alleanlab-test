import React from 'react'
interface Props {
    children: React.ReactNode
}

function TitleDate({children}:Props) {
  return (
    <p className="sm:col-span-2 text-sm text-secondary py-2">{children}</p>
  )
}

export default TitleDate