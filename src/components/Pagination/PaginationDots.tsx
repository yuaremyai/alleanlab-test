import React from 'react'

interface Props {
    styles: string
}

function PaginationDots({styles}:Props) {
  return (
    <div className={styles}> ... </div>
  )
}

export default PaginationDots