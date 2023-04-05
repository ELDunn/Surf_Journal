import React from 'react'
import { useState } from 'react';
import { set } from '../../Server/server';

function Dashboard() {
    
    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [numWaves, setNumWaves] = useState(null);
    const [vibes, setVibes] = useState(null);
    const [crowd, setCrowd] = useState(null);

    const handleSubmit = (e) =>{
    e.preventDefault();
    const location = {lat, long, numWaves, vibes, crowd};

    fetch('/api/location', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify(location)
    })
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      //set
    });
  }

  return (
    <div id='submitBox'>
        <h1>New Log</h1>
        <form onSubmit={handleSubmit}>
            <h3>Latitude: </h3> <input type = 'number' required value = {lat} onChange={(e) => setLat(e.target.value)}/>
            <h3>Longitude: </h3> <input type = 'number' required value = {long} onChange={(e) => setLong(e.target.value)}/>
            <h3>Waves Caught: </h3> <input type = 'number' required value = {numWaves} onChange={(e) => setNumWaves(e.target.value)}/>
            <h3>~Vibes~ (1-10): </h3> <input type = 'number' min = "1" max = "10" required value = {vibes} onChange={(e) => setVibes(e.target.value)}/>
            <h3>Crowd Level(1-10): </h3> <input type = 'number' min = "1" max = "10" required value = {crowd} onChange={(e) => setCrowd(e.target.value)}/>
            <button type = 'submit'> Submit Log</button>
        </form>
    </div>
  )
}

export default Dashboard