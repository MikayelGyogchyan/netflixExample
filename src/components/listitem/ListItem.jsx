import React from 'react'
import { useState } from 'react'
import "./listItem.scss"

export default function ListItem({index}) {
    const [isHovered, setIsHovered] =useState(false);
    const trailer = "img/peaky.MP4" 
  return (
    <div className='listItem' 
    style = {{left: isHovered && index * 225 -50 + index * 2.5}}
    onMouseEnter = {() => setIsHovered(true)} 
    onMouseLeave = {() => setIsHovered(false)}>
      <img className='peakyimg' src="https://larepublica.pe/resizer/xasqoMSWfBL2KyBWXBisabtys5M=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/DSZBWAL4K5HRXBHQEZWVMGBTZM.jpg" alt="" />
    
      {isHovered && (

    <>      
      <video src={trailer} autoPlay={true} loop/>
      <div className="itemInfo">
        <div className="icons">
          <img className='icon' src="https://www.friidesigns.com/wp-content/uploads/2018/11/white-play-icon-png-6.png" alt="" />
          <img className='icon' src="https://www.nicepng.com/png/full/251-2519428_0-add-icon-white-png.png" alt="" />
          <img className='icon' src="https://www.freeiconspng.com/uploads/white-like-icon-png-20.png" alt="" />
          <img className='icon' height="20px" src="https://icon-library.com/images/thumbs-down-icon-png/thumbs-down-icon-png-11.jpg" alt="" />
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14 mins</span>
          <span className='limit'>+16</span>
          <span>1999</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aliquid, nihil quisquam, nesciunt blanditiis nisi repellat assumenda quaerat excepturi eaque nobis.
        </div>
        <div className="genre">Action</div>
      </div>
      </>
      )}
    </div>
  )
}
