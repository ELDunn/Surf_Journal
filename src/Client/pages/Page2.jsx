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
      <h1 id='surfLog'>Surf Log</h1>
        <div className='journal'>
          {ditta.map((item, index) => {
            {console.log(item)}
            return (
            <div className='journalEntries' key={item.id}>
              <p><h3>Log # {index + 1} - Lat:{item.lat} Long:{item.long}</h3> Overall Feeling:{item.vibes} Crowd Level: {item.crowd} Number of Waves Caught:{item.numWaves} Air Temperature(°C):{item.airTemperature.sg} Swell Direction(°N):{item.swellDirection.sg} Swell Height(m):{item.swellHeight.sg}
               Water Temperature(°C):{item.waterTemperature.sg} </p>
               <div id='buttons'>
               <button>Delete</button>
               <button>Update</button>
               </div>
            </div>)})}
        </div>
    </div>
  )
}

export default Page1