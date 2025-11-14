import './Sidebar.css'
// icon ko use karne ke liye is ko import kya hai   
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";
import { FaRegMessage } from "react-icons/fa6";
const Sidebar = () => {
  return (
    <>
        <div className='sidebar'>
            <GiHamburgerMenu />
            {/* This div is plus icon ke liye */}
            <div className='newchat'>
                <AiOutlinePlus />
                <p>New Chat</p>
            </div>

            {/* This div is message icon ke liye */}
            <div className='recent'>
                <FaRegMessage />
                <p>Who are you</p>
            </div>
        </div>
    </>
  )
}

export default Sidebar;
