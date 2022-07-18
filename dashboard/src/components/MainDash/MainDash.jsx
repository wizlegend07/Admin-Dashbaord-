import React from 'react'
import "./MainDash.css"
import Cards from './../Cards/Cards';
import Table from '../../Table/Table';
function MainDash() {
  return (
    <div className='MainDash'>
        <h1>DashBoard</h1>
        <Cards/>
        <Table/>

    </div>
  )
}

export default MainDash