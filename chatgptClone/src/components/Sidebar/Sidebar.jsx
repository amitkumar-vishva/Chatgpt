import './Sidebar.css'
// icon ko use karne ke liye is ko import kya hai   
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";
import { FaRegMessage } from "react-icons/fa6";
import { useState } from 'react';
const Sidebar = () => {
  // is ka use hamburger ki state ko change karne ke liye
  const[extend, setExtend]=useState(false)
  return (
        <div className='sidebar'>
            <GiHamburgerMenu id='ham' onClick={()=>{
              setExtend(prev=>!prev)
              console.log(extend)
            }}/>
            {/* This div is plus icon ke liye */}
            <div className='newchat'>
                <AiOutlinePlus />
               {extend?<p>New Chat</p>:null} 
            </div>

            {/* This div is message icon ke liye */}
            <div className='recent'>
                <FaRegMessage />
                {extend?<p>Who are you</p>:null} 
            </div>
        </div>
  )
}

export default Sidebar;
