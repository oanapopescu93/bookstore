import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Popup from '../popup/popup'
import { bringPayload } from '../../reducers/home'
import Loader from '../partials/loader'
import HomePages from './homePage/homePage'
import Contact from './contact/contact'
import Cart from './cart/cart'
import About from './about/about'
import Category from './category/category'
import Product from './product/product'
import Footer from '../partials/footer'
import Header from '../partials/header/header'
import { changePage } from '../../reducers/page'
import Wishlist from './wishlist/wishlist'
import TermsConditions from './termsConditions/termsConditions'
import PolicyPrivacy from './policyPrivacy/policyPrivacy'
import Checkout from './checkout/checkout'
import { changePopup } from '../../reducers/popup'
import { translate } from '../../translations/translate'

function Page(props) {
    const { socket } = props

    let page = useSelector(state => state.page)
    let home = useSelector(state => state.home)
    let settings = useSelector(state => state.settings) 
    let filters = useSelector(state => state.filters.filters) 
    let cart = useSelector(state => state.cart.cart) 
    let wishlist = useSelector(state => state.wishlist.wishlist)

    let dispatch = useDispatch()

    useEffect(() => {
		dispatch(bringPayload())
	}, [])

    function handleMenuChoice(e){
        dispatch(changePage(e))
    }    

    useEffect(() => {
		const handleOrderRead = (details)=>{
            let payload = {
                open: true,
                template: "paymentSuccess",
                title: translate({lang: settings.lang, info: "payment_success"}),
                data: details,
                size: 'md',
            } 
            dispatch(changePopup(payload)) //show success popup
        }
		socket.on('order_read', handleOrderRead)
		return () => {
            socket.off('order_read', handleOrderRead)
        }
    }, [socket])

    return <>
        <Header 
            {...props} 
            home={home} 
            filters={filters}
            settings={settings} 
            cart={cart} 
            wishlist={wishlist} 
            handleMenuChoice={(e)=>handleMenuChoice(e)}
        />
        {(() => {
            if(home.loaded){
                let pageChoice = page.page
                switch(pageChoice){
                    case "wishlist":
                        return <Wishlist 
                            {...props} 
                            page={page} 
                            home={home} 
                            settings={settings} 
                            wishlist={wishlist} 
                            handleMenuChoice={(e)=>handleMenuChoice(e)}
                        />
                    case "checkout":
                        return <Checkout 
                            {...props} 
                            page={page} 
                            home={home} 
                            settings={settings} 
                            cart={cart} 
                            handleMenuChoice={(e)=>handleMenuChoice(e)}
                        />
                    case "cart":
                        return <Cart 
                            {...props} 
                            page={page} 
                            home={home} 
                            settings={settings} 
                            cart={cart} 
                            handleMenuChoice={(e)=>handleMenuChoice(e)}
                        />                    
                    case "category":
                        return <Category 
                            {...props} 
                            page={page} 
                            home={home} 
                            settings={settings} 
                            filters={filters} 
                            handleMenuChoice={(e)=>handleMenuChoice(e)}
                        />
                    case "product":
                        return <Product 
                            {...props} 
                            page={page} 
                            home={home} 
                            settings={settings} 
                            handleMenuChoice={(e)=>handleMenuChoice(e)}
                        />
                    case "contact":
                        return <Contact 
                            {...props} 
                            page={page} 
                            home={home} 
                            settings={settings} 
                            handleMenuChoice={(e)=>handleMenuChoice(e)}
                        />
                    case "about":
                        return <About 
                            {...props} 
                            page={page} 
                            home={home} 
                            settings={settings} 
                            handleMenuChoice={(e)=>handleMenuChoice(e)}
                        />
                    case "terms_cond":
                        return <TermsConditions 
                            {...props} 
                            page={page} 
                            home={home} 
                            settings={settings} 
                            handleMenuChoice={(e)=>handleMenuChoice(e)}
                        />
                    case "policy_privacy":
                        return <PolicyPrivacy 
                            {...props} 
                            page={page} 
                            home={home} 
                            settings={settings} 
                            handleMenuChoice={(e)=>handleMenuChoice(e)}
                        />
                    default:
                        return <HomePages 
                            {...props} 
                            page={page} 
                            home={home} 
                            settings={settings} 
                            handleMenuChoice={(e)=>handleMenuChoice(e)}
                        />
                }
                
            } else {
                return <Loader />
            }
        })()}
        <Footer {...props} settings={settings}/>
        <Popup {...props} home={home} settings={settings}/>
    </>
}

export default Page