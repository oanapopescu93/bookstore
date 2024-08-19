import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Stripe from './type/stripe'
import { translate } from '../../../translations/translate'
import { useDispatch } from 'react-redux'
import { changePopup } from '../../../reducers/popup'
import { formatPrice, isEmpty, postData } from '../../../utils/utils'
import { cartRemoveAll } from '../../../reducers/cart'

import JSZip from 'jszip'
import { saveAs } from 'file-saver'

function Checkout(props) {
    const { socket, cart, settings } = props
    const { lang } = settings
    const [paymentSending, setPaymentSending] = useState(false)
    let dispatch = useDispatch()
    
    const totalPrice = cart.reduce((total, item) => {        
        return total +  formatPrice(item.price, item.selected_format)
    }, 0)

    function handlePay(data){
        if(cart && cart.length > 0){
            sendPayment({...data, products: cart, amount: totalPrice.toFixed(2)})
        } else {
            showError({payload: "no_cart"})
        }        
    }

    function sendPayment(payload){
        if(payload.amount > 0){
            let url = ""
            switch(payload.gateway){
                case "stripe":
                    url = "/api/stripe"
                    break                
                default:
                    break
            }
            if(!isEmpty(url)){
                setPaymentSending(true)
                postData(url, payload).then((data) => {
                    setPaymentSending(false)
                    if(data && data.result && data.result === "success"){
                        switch(payload.gateway){
                            case "stripe":
                                handlePaymentStripe(data)
                                break
                            default:
                                console.log('showError01')
                                showError()
                                break
                        }
                    } else {
                        console.log('showError02', data)
                        showError(data)
                    }
                })
            }
        } else {
            console.log('showError03')
            showError()
        }
    }

    function handlePaymentStripe(data){        
        let details = {
            method: "stripe",
            payment_id: data.payload.id,
            customer_id: data.payload.customer,
            order_date: data.payload.created * 1000,
            amount: parseFloat((data.payload.amount / 100).toFixed(2)),
            payment_method: data.payload.payment_details.payment_type,
            status: data.payload.status,
            description: data.payload.description,
            currency: data.payload.currency.toUpperCase(),
            items: data.payload.metadata,
            cart
        }
        socket.emit('order_send', details)        
        handleDownload(cart)
    }

    function handleDownload(){
        let downloads = []
        for(let i in cart){
            downloads.push({
                title: cart[i].title, 
                author: cart[i].author, 
                selected_format: cart[i].selected_format,
                fileUrl: "/ebooks/" + cart[i].fileUrl + "/" + cart[i].fileUrl + "." + cart[i].selected_format
            })
        }

        let zip = new JSZip()
        let folder = zip.folder("ebooks")

        let downloadPromises = downloads.map(item => {
            return fetch(item.fileUrl)
                .then(response => response.blob())
                .then(blob => {
                    folder.file(`${item.title} - ${item.author}.${item.selected_format}`, blob)
                })
        })

        Promise.all(downloadPromises).then(() => {
            zip.generateAsync({ type: "blob" }).then(function (content) {
                saveAs(content, "ebooks.zip")
                dispatch(cartRemoveAll())
            })
        })
    }

    function showError(data={}){
        let payload = {
            open: true,
            template: "error",
            title: translate({lang: lang, info: "error"}),
            data: translate({lang: lang, info: data.payload && typeof data.payload === "string" ? data.payload : "error_charge"}),
            size: 'sm',
        }
        dispatch(changePopup(payload))
    }

    return <div className="page page_box">
        <div className="checkout_container">
            <Container>
                <Row>
                    <Col sm={12}>
                        <h2 className="title_line"><span>{translate({lang: lang, info: "checkout"})}</span></h2>
                    </Col>
                </Row>
                <Col sm={12}>
                    <Stripe {...props} handlePay={(e)=>handlePay(e)} paymentSending={paymentSending}/>
                </Col>
            </Container>
        </div>
    </div>
}

export default Checkout