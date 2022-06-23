import { Button } from '@mui/material'
import React from 'react'
import './styles/style.css'

export default function SidebarButton({data}) {
  return (
    <div className='sidebarBtn__container'>
        <Button><i className={data.icon}></i> {data.name}</Button>
    </div>
  )
}
