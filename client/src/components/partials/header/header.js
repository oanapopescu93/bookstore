import React, { useState, useEffect } from 'react'
import NavBar from './navBar'
import Menu from './menu'
import AnnouncementBar from './announcementBar'

function Header(props) {
    const [menuToggle, setToggle] = useState(false)

    function handleMenuClick(){
        setToggle(!menuToggle)
    }

    useEffect(() => {
		return () => {
            setToggle(false)
		}
	}, [])

    return <>
        <AnnouncementBar {...props} />
        <header className="header">
            <NavBar {...props} menuToggle={menuToggle} handleMenuClick={()=>{handleMenuClick()}} handleMenuChoice={(e)=>props.handleMenuChoice(e)}/>
            <Menu {...props} menuToggle={menuToggle} handleMenuChoice={(e)=>props.handleMenuChoice(e)}/>
        </header>
    </>
}

export default Header