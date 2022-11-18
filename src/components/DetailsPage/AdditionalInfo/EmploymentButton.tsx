import React from 'react'

interface Props {
    children: React.ReactNode,
}

function EmploymentButton({children}: Props) {
  const styles = 'flex grow items-center justify-center font-bold text-employButton-dark bg-employButton-light border-2 border-buttonBorder rounded-md py-2 mb-2'
  
  return <div className={styles}>{children}</div>
}

export default EmploymentButton