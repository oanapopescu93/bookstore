import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Stars from '../../rating/stars'
import { Dropdown, DropdownButton, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import Breadcrumbs from '../../partials/breadcrumbs'
import { useDispatch } from 'react-redux'
import { changePage } from '../../../reducers/page'
import Carousel from '../../carousel/carousel'
import { cartAdd } from '../../../reducers/cart'
import { wishlistAdd } from '../../../reducers/wishlist'
import { translate } from '../../../translations/translate'
import { convertCurrency, formatPrice } from '../../../utils/utils'

function Product(props) {
    const { page, home, exchange_rates, settings } = props
    const { details } = page
    const { lang, currency } = settings

    const [selectedFormat, setSelectedFormat] = useState(null)
    const [errorSelectedFormat, setErrorSelectedFormat] = useState(false)
    const [products, setProducts] = useState(home.products)

    let dispatch = useDispatch()

    let similar_products_carousel_options = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        draggable: true,
        dots: false,
        arrows: false,
        initialSlide: 0,
        swipeThreshold: 20,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                }
            }, 
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }

    useEffect(() => {
        let myProducts = [...home.products]
        let filter_type = details.subtype ? details.subtype : details.type
        if(filter_type){
            myProducts = myProducts.filter(product => {
                if((product.type === filter_type || product.subtype === filter_type) && product.id !== details.id){
                    return product
                }
                return
            })           
        }
        setProducts(myProducts)
    }, [details])

    function handleFormatChange(e){
        setSelectedFormat(e)
        setErrorSelectedFormat(false)
    }

    function handleCart(){
        if(!selectedFormat){
            setErrorSelectedFormat(true)
        } else {
            dispatch(cartAdd({...details, selected_format: selectedFormat}))
        }
    }

    function handleWishlist(){
        dispatch(wishlistAdd(details))
    }

    function handleBreadcrumbs(e){
        dispatch(changePage(e))
    }

    function getItem(e){
        let payload = {choice: "product", details: e}
        dispatch(changePage(payload))
    }

    //<span className="price">{convertCurrency(formatPrice(data.price), currency, exchange_rates)} {currency}</span>

    return <div className="page page_box">     
        <div className="product_container">     
            <Row>
                <Col sm={4} md={4} lg={3}>
                    <div className="product_image">                        
                        <img src={"/img/book_covers/" + details.fileUrl + ".jpg"} />
                    </div>                    
                </Col>
                <Col sm={8} md={8} lg={9}>
                    <div className="product_info">
                        <Breadcrumbs details={details} settings={settings} handleBreadcrumbs={(e)=>handleBreadcrumbs(e)} />
                        <h1>{details.title}</h1>
                        <h2>{details.author}</h2>
                        <Stars score={details.rating} max={5} />
                        <div className="price_box">
                            <span className="price">{convertCurrency(formatPrice(details.price, selectedFormat), currency, exchange_rates)} {currency}</span>
                        </div>
                        <div className="product_info_box">
                            <h3>{translate({lang: lang, info: "description"})}</h3>
                            <p>{details.description}</p> 
                            <div className="product_info_tags">
                                {details.tags.map((tag, index) => (
                                    <div key={index} className="tag_box">{translate({lang: lang, info: tag})}</div>
                                ))}
                            </div>
                        </div>
                        <div className="product_info_box">
                            <div className="product_info_dropdown_format">
                                <DropdownButton id="dropdown_format" title={selectedFormat ? selectedFormat : translate({lang: lang, info: "select_format"})}>
                                    {details.format.map((format, index) => (
                                        <Dropdown.Item key={index} onClick={() => handleFormatChange(format)}>
                                            {format}
                                        </Dropdown.Item>
                                    ))}
                                </DropdownButton>
                            </div>                            
                            {errorSelectedFormat ? <div className="alert alert-danger">
                                <p>{translate({lang: lang, info: "error_format"})}</p>
                            </div> : null}
                        </div>
                        <div className="button_action_group">
                            <Button type="button" className="mybutton button_fullcolor01" onClick={()=>handleCart()}>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </Button>
                            <Button type="button" className="mybutton button_fullcolor01" onClick={()=>handleWishlist()}>
                                <FontAwesomeIcon icon={faHeart} />
                            </Button>
                        </div>
                    </div>                    
                </Col>
            </Row>
            {products && products.length > 0 ? <Row>
                <Col sm={12}>
                    <h2 className="similar_products">{translate({lang: lang, info: "similar_products"})}</h2>
                    <Carousel 
                        {...props}
                        id="carousel_similar_products"
                        template="similar_products" 
                        options={similar_products_carousel_options} 
                        itemList={products}
                        getItem={(e)=>getItem(e)}
                    />
                </Col>
            </Row> : null}            
        </div>
    </div>
}

export default Product