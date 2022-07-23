import React from 'react'
import "./watch.scss"

export default function Watch() {
  return (
    <div className='watch'>
      <div className="back">
        <img className='leftarrow' src="img/leftarrow.png" alt="" />
        Home
      </div>
      <video className='video' autoPlay progress controls src='img/peaky.MP4'/>
    </div>
  )
}
