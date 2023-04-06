import { useEffect, useState } from "react"
import React from 'react'

function Page1(props) {

  //will need a component did mount and load the database
  //access the database storing our information 
  //access logs

  useEffect(()=>{
    
  })
  return (
    <div className='infoServe'>
        <h1>Statistics</h1>
        <ul id='statList'>
          <li>Waves caught:</li>
          <li>Days surfed:</li>
          <li>Time in the water:</li>
          <li>Waves per session:</li>
          <li>Women talked to : 0</li>
        </ul>
    </div>
  )
}

export default Page1