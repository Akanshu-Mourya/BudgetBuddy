import React from 'react'
import Sidebar from '../Shared/SideBar'
import { darkThemeColor } from '../DarkLiteMood/ThemeProvider'

const DeshBord = () => {
  return (
    <div className={`${darkThemeColor} flex`}>
      <Sidebar />


    </div>



  )
}

export default DeshBord