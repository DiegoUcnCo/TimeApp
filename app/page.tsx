import React from 'react'
import style from './css/WeatherComponent.module.css'
const page = () => {
  return (
    <div className={style.main}>
      <h1>Temperatura de Medellin</h1>
      <div className={style.iframeContainer}>
      <iframe src="http://localhost:8000/d-solo/a3af77ce-7b29-4c9a-97a3-c776f58afeed/medellin-temperature?orgId=1&panelId=1"
          width="80%"
          height="500"
        ></iframe>
        <iframe src="http://localhost:8000/d-solo/a3af77ce-7b29-4c9a-97a3-c776f58afeed/medellin-temperature?orgId=1&panelId=2"  width="80%"
          height="500"></iframe>
      </div>
    </div>
  )
}

export default page

