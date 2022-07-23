import React from 'react'
import "./featured.scss"


export default function Featured({type}) {
  return (
    <div className='featured'>
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventue">Adventue</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div> 
        )}
      <img src="https://www.freepnglogos.com/uploads/mr-bean/rowan-atkinson-jufjanneke-ben-jarig-2.png" alt="" />
    
      <div className="info">
        <img width="50%" src="https://occ-0-4922-768.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRKrgH8goki6B50_fsipiwG8-efCu0w57iY4KsMiMOkV_xpwmCR1bwdO-qexN7jGsMEEVHu_udqNGVab2eGM-RxjYidvNBjuWkAE.png?r=df1" alt="" />
        <span className='desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt similique vero, eaque repudiandae inventore accusantium commodi magnam quisquam fuga quos cupiditate in necessitatibus vel doloribus porro aliquam facere voluptas. Tempora non debitis ea ab ipsa nisi, tenetur facilis omnis nemo.</span>
        <div className="buttons">
          <button className="play">
              <img width="24px" src="https://findicons.com/files/icons/2315/default_icon/256/media_play.png" alt="" />
              <span>Play</span>
          </button>

          <button className="more">
            <img width="24px" src="https://icon-library.com/images/information-icon-white/information-icon-white-6.jpg" alt="" />
            <span>Info</span>
          </button>
        </div>

      </div>
    </div>
  )
}





