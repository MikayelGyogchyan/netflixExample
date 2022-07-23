import React from 'react'
import { useState } from 'react'
import "./navbar.scss"


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar" }>
        <div className="container">
          <div className="left">
            <img src="img/geeksfilx.png" alt="" />
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My list</span>
          </div>

          <div className="right">
            <img className='icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/1200px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png" alt="" />
            <span>KID</span>
            <img className='icon' src="https://www.pngfind.com/pngs/b/5-50581_smart-phone-doorbell-bell-button-hd-png-download.png" alt="" />
            <img src="https://www.freepnglogos.com/uploads/mr-bean/rowan-atkinson-jufjanneke-ben-jarig-2.png" alt="" />
            <div className="profile">
              <img className='icon' src="https://www.freeiconspng.com/thumbs/white-arrow-png/white-down-arrow-png-2.png" alt="" />
              <div className="options">
                <span>Settings</span>
                <span>Logout</span>
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Navbar
