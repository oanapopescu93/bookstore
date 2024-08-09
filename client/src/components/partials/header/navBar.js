import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faGear, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { changePopup } from '../../../reducers/popup'
import { useDispatch } from 'react-redux'
import logo from '../../../img/icons/logo.png'
import { translate } from '../../../translations/translate'

function NavBar(props) {
    const { menuToggle, cart, wishlist, settings } = props
    const { lang } = settings
    const [cartItemsTotal, setCartItemsTotal] = useState(cart.length)
    const [wishlistItemsTotal, setWishlistItemsTotal] = useState(wishlist.length)
    let dispatch = useDispatch()

    useEffect(() => {
		setCartItemsTotal(cart.length)
        setWishlistItemsTotal(wishlist.length)
		return () => {
			setCartItemsTotal(0)
            setWishlistItemsTotal(0)
		}
	}, [cart, wishlist])

    function handleMenuClick(){
        if(typeof props.handleMenuClick === "function"){
            props.handleMenuClick()
        }
    }

    function handleSettings(){
        let payload = {
            open: true,
            template: "settings",
            title: "settings",
            size: "sm",
        }
        dispatch(changePopup(payload))
    }

    return <nav className="navbar">
        <div className={menuToggle ? "menu_icon change" : "menu_icon"} onClick={()=>handleMenuClick()}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
        <div className="logo" onClick={()=>props.handleMenuChoice({choice: "home"})}>
            <img src={logo} alt="logo" />
            <div className="title">
                <h1>The Book Mouse</h1>
                <h2>{translate({lang: lang, info: "motto"})}</h2>
            </div>
        </div>
        <div className="item search right">
            <div className="search_group">            
                <input type="text" />
                <div className="search_icon">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </div>
        </div>
        <div className="group_list">
            <div className="group">
                <FontAwesomeIcon icon={faGear} onClick={()=>handleSettings()}/>
            </div>
            <div className="group">
                <FontAwesomeIcon icon={faHeart} onClick={()=>props.handleMenuChoice({choice: 'wishlist'})}/>
                {wishlistItemsTotal > 0 ? <span className="group_number">{wishlistItemsTotal}</span> : null}
            </div>
            <div className="group">
                <FontAwesomeIcon icon={faCartShopping}  onClick={()=>props.handleMenuChoice({choice: 'cart'})}/>                
                {cartItemsTotal > 0 ? <span className="group_number">{cartItemsTotal}</span> : null}
            </div>
        </div>
    </nav>
}

export default NavBar