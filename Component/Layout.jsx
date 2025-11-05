import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <div className='h-16 sticky top-0 border-b shadow flex items-center justify-center bg-white'>
                <div className='font-semibold text-purple-600 text-2xl'>Aerocartrips</div>

            </div>
            <Outlet/>
        </div>
    )
}

export default Layout