import React from 'react'
import "./IconBfb.css"
import liga from "./logo-partner-vtb.png"
import vfv from "./logo-partner-vfv.png"
import fiba from "./logo-partner-fiba.png"


const Icon_Bfb = () => {
  return (
    <div className='content0'>
            <div className="ivg_icon1">
            <a href="http://vtb-league.com/"><img id='imgicon1' src={liga} alt=""/></a>
             <a href="http://www.volley.ru/"><img id='imgicon1' src={vfv} alt=""/></a>
             <a href="http://fiba.com/"><img id='imgicon1' src={fiba} alt="" /></a>
             </div>
    </div>
  )
}

export default Icon_Bfb;