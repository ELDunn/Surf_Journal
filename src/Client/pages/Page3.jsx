import { useEffect, useState } from "react"
import React from 'react'
import { HighQualitySharp } from "@mui/icons-material";

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
  let high = 0;
  return (
    <div className='infoServe' id="stats">
        <h1>Statistics</h1>
        <ul id='statList'>
          <li>{ditta.forEach(ele => help += ele.numWaves)}
          Total waves caught: {help}</li>
          <li>{ditta.forEach(ele => {
            if (typeof ele.swellHeight.sg == 'number' && ele.swellHeight.sg !== Infinity){
              high += ele.swellHeight.sg}})} Average Wave Height (m): {Math.round(high/15 * 10)/10}</li>
          <li>{ditta.forEach(ele => days += 1)} Days Surfed:1</li>
          <li>Waves Per Session: {Math.round(help/days * 10) / 10}</li>
          <li>Women Talked To : 0</li>
        </ul>
    </div>
  )
}

export default Page1