import React from 'react'
import {useEffect, useState} from 'react'

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
  //const ditta = getData();
  return (
    <div className='infoServe'>
        <h1>Surf Log</h1>
        <div>
          {ditta.map((item, index) => {
            {console.log(item)}
            return (
            <div key={item.id}>
              <p>{index + 1}. Number of Waves Caught:{item.numWaves} Air Temperature: {item.airTemperature.sg} degrees centigrade</p>
            </div>)})}
        </div>
    </div>
  )
}

export default Page1