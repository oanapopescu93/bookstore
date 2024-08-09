import React from 'react'
import { Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import nopic from '../../img/icons/nopicture.gif'
import Stars from '../rating/stars'
import { formatPrice } from '../../utils/utils'

function Cell(props) {
    const {data, template, settings} = props
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
                                <img src={nopic} onClick={()=>getItem(data)}/>
                                <div className="price_box">
                                    <span className="price">{formatPrice(data.price)} {currency}</span>
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