import React from 'react'
import { Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import Stars from '../rating/stars'
import { convertCurrency, formatPrice } from '../../utils/utils'

function Cell(props) {
    const {data, template, exchange_rates, settings} = props
    const {currency} = settings

    function getItem(x){ 
        props.getItem(x)
    }

    return <>
        {(() => {
            switch (template) {
                case "promotional_offers":
                case "similar_products":
                    return <div className="cell_bookstore_container">
                        {data.discount > 0 ? <div className="discount">{data.discount}%</div> : null}
                        <div className="cell_bookstore shadow_convex">
                            <div className="cell_info">
                                <h4 className="cell_title">{data.title}</h4>
                                <p className="cell_author">{data.author}</p>
                                <Stars score={data.rating} max={5}/>                                
                                <div className="image_box">
                                    <img src={"/img/book_covers/" + data.fileUrl + ".jpg"} onClick={()=>getItem(data)}/>
                                </div>
                                <div className="price_box">
                                    <span className="price">{convertCurrency(formatPrice(data.price), currency, exchange_rates)} {currency}</span>
                                </div>
                            </div>
                            <div className="cell_button">
                                <Button type="button" className="mybutton round button_fullcolor02" onClick={()=>getItem(data)}>
                                    <FontAwesomeIcon icon={faBookOpen} />
                                </Button>
                            </div>
                        </div>
                    </div>
            }
        })()}
    </>
}

export default Cell