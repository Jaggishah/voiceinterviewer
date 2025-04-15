import React from 'react'

interface Props {
  children: React.ReactNode
}
const layout = ({children}:Props) => {
  return (
    <div className='auth-layout'>
      {children}
    </div>
  )
}

export default layout
