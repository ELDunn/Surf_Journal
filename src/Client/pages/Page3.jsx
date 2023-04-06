import { useEffect, useState } from "react"
import React from 'react'

function Page1(props) {
  const [ditta,setDitta] = useState([]);
  const getData = async () => {
    const request = await fetch('/api/getLogs');
    const parsedData = await request.json()
    // console.log('Im data on the front end', parsedData);
    setDitta([...parsedData]);
    return;
  }
  useEffect(()=>{
    getData();
  },[])
  let help = 0;
  let days = 0;
  return (
    <div className='infoServe'>
        <h1>Statistics</h1>
        <ul id='statList'>
          <li>{ditta.forEach(ele => help += ele.numWaves)}
          Total waves caught: {help}</li>
          <li>{ditta.forEach(ele => days += 1)} Days surfed: {days}</li>
          <li>Waves per session: {Math.round(help/days * 10) / 10}</li>
          <li>Women talked to : 0</li>
        </ul>
    </div>
  )
}

export default Page1