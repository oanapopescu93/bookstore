import React from 'react'
import Carousel from '../../carousel/carousel'
import { translate } from '../../../translations/translate'

function PromotionalOffers(props) {
    const { home, settings } = props
    const { products } = home
    const { lang } = settings

    const promoProducts = products.filter(product => product.promo)
    let promotional_offers_carousel_options = {
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

    function getItem(e){
        let payload = {choice: "product", details: e}
        props.handleMenuChoice(payload)
    }

    return <>
        {promoProducts && promoProducts.length > 0 ? <div className="promotional_offers_container">
            <h2 className="title_line"><span>{translate({lang: lang, info: "special_offers"})}</span></h2>
            <div className="promotional_offers">
                <Carousel 
                    {...props}
                    id="carousel_promotional_offers"
                    template="promotional_offers" 
                    options={promotional_offers_carousel_options} 
                    itemList={promoProducts}
                    getItem={(e)=>getItem(e)}
                />
            </div>
        </div> : null}        
    </>
}

export default PromotionalOffers