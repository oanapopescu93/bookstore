import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import nopic from '../../../img/icons/nopicture.gif'
import { useDispatch } from 'react-redux'
import { cartAdd, cartRemove } from '../../../reducers/cart'
import { translate } from '../../../translations/translate'
import { formatPrice } from '../../../utils/utils'

function Wishlist(props) {
    const { settings, wishlist } = props
    const { lang, currency } = settings
    let dispatch = useDispatch()

    function handleDelete(id){
        dispatch(cartRemove({id}))
    }

    function handleCart(item){
        dispatch(cartAdd({...item, selected_format: item.format[0]}))
    }

    return <div className="page page_box">   
        <div className="wishlist_container">
            <Row>
                <Col sm={12}>
                    <h2 className="title_line"><span>{translate({lang: lang, info: "wishlist"})}</span></h2>
                </Col>
            </Row>
            {wishlist && wishlist.length > 0 ? <Row>
                <Col sm={12}>
                    <div className="wishlist_list_container">
                    {wishlist.map(item => {
                        return <Row key={item.cartId} className="wishlist_item">
                            <Col xs={4} sm={4} md={4} lg={2} className="wishlist_item_image">
                                <img src={nopic} alt={item.title} />
                            </Col>
                            <Col xs={8} sm={6} md={6} lg={8} className="wishlist_item_info">
                                <Row>
                                    <Col xs={12}>
                                        <h4>{item.title}</h4>
                                        <p>{item.author}</p>
                                        <div className="price_box">
                                            <span className="price">{formatPrice(item.price)} {currency}</span>
                                        </div>
                                        <p>{item.format.join(', ')}</p>                          
                                    </Col>
                                    <Col xs={12} className="d-none d-md-block wishlist_item_buttons">
                                        <Button type="button" className="mybutton round button_red" onClick={()=>handleCart(item)}>
                                            <FontAwesomeIcon icon={faCartShopping} />
                                        </Button>
                                        <Button type="button" className="mybutton round button_red" onClick={()=>handleDelete(item.id)}>
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </Button>
                                    </Col>
                                </Row>                   
                            </Col>
                            <Col xs={12} sm={2} md={2} lg={2} className="d-block d-md-none wishlist_item_buttons">
                                <Button type="button" className="mybutton round button_red" onClick={()=>handleCart(item)}>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </Button>
                                <Button type="button" className="mybutton round button_red" onClick={()=>handleDelete(item.id)}>
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </Button>
                            </Col>
                        </Row>
                    })}
                    </div>
                </Col>
            </Row> : <Row>
                <Col sm={12}>
                    <p>{translate({lang: lang, info: "no_wishlist"})}</p>
                </Col>  
            </Row>}            
        </div>
    </div>
}

export default Wishlist