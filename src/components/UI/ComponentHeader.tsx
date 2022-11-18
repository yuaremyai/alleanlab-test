import React from 'react'

interface Props {
    children: React.ReactNode
    
}

function ComponentHeader({children}:Props) {
  return (
    <p className="text-xl font-bold border-b-2 border-secondary w-full pb-2">{children}</p>
  )
}

export default ComponentHeader