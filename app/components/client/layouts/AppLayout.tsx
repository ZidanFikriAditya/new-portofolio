import React from 'react'
import Sidebar from './partials/Sidebar'
import Header from './partials/Header'

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout = ({children} : AppLayoutProps) => {
  return (
    <div className='p-5'>
      <div className="grid grid-cols-12 gap-5">
        <Sidebar />
        <div className='col-span-10'>
          <Header />
          <div className="w-full p-4 bg-primary rounded-lg mt-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppLayout