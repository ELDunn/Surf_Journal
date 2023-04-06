import React from 'react'

const CharacterCard = ({
    info
  }) => {
    const {
        lat, long, numWaves, vibes, crowd, waveHeight, airTemperature, waterTemperature, swellDirection, swellHeight, swellPeriod
    } = info;

  return (
    <article className="card charCard">
    <div className="charHeadContainer">
    </div>
    <ul className="charDetailsList">
      <li className="charDetail">Latitude: {lat}</li>
      <li className="charDetail">Longitude: {long} </li>
      <li className="charDetail">Number of Waves: {numWaves}</li>
      <li className="charDetail">~Vibes~: {vibes}</li>
      <li className="charDetail">Crowd: {crowd}</li>
      <li className="charDetail">Wave Height: {waveHeight}</li>
      <li className="charDetail">Air Temperature: {airTemperature}</li>
      <li className="charDetail">Water Temperature: {waterTemperature}</li>
      <li className="charDetail">Swell Direction: {swellDirection} </li>
      <li className="charDetail">Swell Height: {swellHeight} </li>
      <li className="charDetail">Swell Period: {swellPeriod} </li>
    </ul>
  </article>
  )
}

export default logCard