import React from 'react'
import Sidebar from '../Shared/SideBar'
import { darkThemeColor } from '../DarkLiteMood/ThemeProvider'

const Expense = () => {
    return (
        <div className={`${darkThemeColor} flex`}>
            <Sidebar />
            <div className='flex-1 p-6'>
                <h1 className='text-2xl font-semibold text-white'>Expense Management</h1>
                <p className='text-white mt-4'>Here you can manage and track your expenses.</p>

                {/* Example of an expense list or form */}
                <div className='mt-6'>
                    {/* <button className='bg-blue-500 text-white px-4 py-2 rounded'>
                        Add New Expense
                    </button> */}
                    {/* You can replace this with dynamic content like an expense list */}
                </div>
            </div>
        </div>
    )
}

export default Expense
