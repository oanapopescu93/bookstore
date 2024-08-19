import React, { useState, useEffect } from 'react'
import { Col, Row, Button, Dropdown, DropdownButton } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faCartShopping, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { cartRemove, cartUpdate } from '../../../reducers/cart'
import { changePage } from '../../../reducers/page'
import { translate } from '../../../translations/translate'
import { convertCurrency, formatPrice } from '../../../utils/utils'

function Cart(props) {
    const { settings, home, exchange_rates, cart } = props
    const { lang, currency } = settings
    const { finance } = home
    const [formats, setFormats] = useState({})
    const [errorFormats, setErrorFormats] = useState({})
    let dispatch = useDispatch()

    useEffect(() => {
        const initialFormats = {}
        cart.forEach(item => {
            initialFormats[item.cartId] = item.selected_format
        })
        setFormats(initialFormats)
    }, [cart])

    function handleDelete(cartId){
        dispatch(cartRemove({cartId}))
    }

    function handleFormatChange(x, id, cartId){
        setErrorFormats(prev => ({ ...prev, [cartId]: false }))
        const itemExists = cart.some(item => {
            return item.id === id && item.selected_format === x
        })        
        if (!itemExists) {
            setFormats(prev => ({ ...prev, [cartId]: x }))
            dispatch(cartUpdate({cartId, selected_format: x}))
        } else {
            setErrorFormats(prev => ({ ...prev, [cartId]: true }))
            setTimeout(()=>{
                setErrorFormats(prev => ({ ...prev, [cartId]: false }))
            }, 2000)
        }
    }

    function handleCheckout(){
        dispatch(changePage({choice: "checkout"}))
    }

    function handleBack(){
        dispatch(changePage({choice: "home"}))
    }
    
    const totalPrice = cart.reduce((total, item) => {
        return total + convertCurrency(formatPrice(item.price, item.selected_format), currency, exchange_rates)
    }, 0)
    const totalPriceUSD = cart.reduce((total, item) => {
        return total + formatPrice(item.price, item.selected_format)
    }, 0)
    const minimum_amount = convertCurrency(3, currency, exchange_rates)

    return <div className="page page_box">   
        <div className="cart_container">
            <Row>
                <Col sm={12}>
                    <h2 className="title_line"><span>{translate({lang: lang, info: "cart"})}</span></h2>
                </Col>
            </Row>
            {cart && cart.length > 0 ? <Row>
                <Col sm={8}>
                    <div className="cart_list_container">
                    {cart.map(item => {
                        return <Row key={item.cartId} className="cart_item">
                            <Col xs={4} sm={4} md={4} lg={2} className="cart_item_image">
                                <img src={"/img/book_covers/" + item.fileUrl + ".jpg"} alt={item.title} />
                            </Col>
                            <Col xs={8} sm={6} md={6} lg={8} className="cart_item_info">
                                <Row>
                                    <Col xs={12}>
                                        <h4>{item.title}</h4>
                                        <p>{item.author}</p>
                                        <div className="price_box">
                                            <span className="price">{convertCurrency(formatPrice(item.price, item.selected_format), currency, exchange_rates)} {currency}</span>
                                        </div>                                
                                        <DropdownButton id="dropdown-format" title={formats[item.cartId] || "select_format"}>
                                            {item.format.map((x, index) => (
                                                <Dropdown.Item key={index} onClick={() => handleFormatChange(x, item.id, item.cartId)}>
                                                    {x}
                                                </Dropdown.Item>
                                            ))}
                                        </DropdownButton>
                                        {errorFormats[item.cartId] ? <p className="error_text">{translate({lang: lang, info: "error_select_format"})}</p> : null}               
                                    </Col>
                                </Row>                   
                            </Col>
                            <Col xs={12} sm={2} md={2} lg={2} className="cart_item_buttons">
                                <Button type="button" className="mybutton round button_red" onClick={()=>handleDelete(item.cartId)}>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </Button>
                            </Col>
                        </Row>
                    })}
                    </div>
                </Col>
                <Col sm={4}>
                    <div className="total_price">
                        <h4>{translate({lang: lang, info: "total_price"})}</h4>
                        <h2>{totalPrice.toFixed(2)} {currency} {totalPriceUSD}</h2>
                        {totalPriceUSD > finance.minimum_amount_usd ? <div className="cart_item_buttons">
                            <Button type="button" className="mybutton button_fullcolor01" onClick={()=>handleCheckout()}>
                                <FontAwesomeIcon icon={faCartShopping} />&nbsp;
                                <span>{translate({lang: lang, info: "checkout"})}</span>
                            </Button>
                            <Button type="button" className="mybutton button_fullcolor01" onClick={()=>handleBack()}>
                                <FontAwesomeIcon icon={faBookOpen} />&nbsp;
                                <span>{translate({lang: lang, info: "continue_shopping"})}</span>
                            </Button>
                        </div> : <div className="alert alert-danger">
                            <p><b>{translate({lang: lang, info: "amount_too_low"})}</b></p>
                            <p>{translate({lang: lang, info: "minimum_amount_is"})} {minimum_amount} USD</p>
                        </div>}
                    </div>
                </Col>
            </Row> : <Row>
                <Col sm={12}>
                    <p>{translate({lang: lang, info: "no_cart"})}</p>
                </Col>  
            </Row>}            
        </div>
    </div>
}

export default Cart