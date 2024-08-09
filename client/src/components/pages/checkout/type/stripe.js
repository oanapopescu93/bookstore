import React, {useState} from 'react'
import { Col, Row, DropdownButton, Dropdown, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { checkoutData, isEmpty, paymentErrors } from '../../../../utils/utils'
import { validateCard, validateCardMonthYear, validateCVV } from '../../../../utils/validate'
import { translate } from '../../../../translations/translate'

function Stripe(props) {
    const { settings, paymentSending } = props
    const { lang } = settings

    const [cardNumber, setCardNumber] = useState("")
    const [month, setMonth] = useState(-1)
    const [year, setYear] = useState("")  
    const [cvv, setCvv] = useState("")

    const monthOptions = checkoutData().monthOptions
    const yearOptions = checkoutData().yearOptions
    const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

    const [paymentError, setPaymentError] = useState(paymentErrors())

    function changeMonth(x){
        setMonth(x)
    }
    function changeYear(x){
        setYear(x)
    }

    function handlePay(data){
        if(!validate(data)){
            props.handlePay({
                ...data, 
                description: "Buy books", 
                gateway: "stripe"
            })
        }
    }

    function validate(data){
        let errors = paymentErrors()
        if(isEmpty(data.cardNumber)){
            errors.cardNumber.fill = false
        }
        if(!validateCard(data.cardNumber)){ // test card details --> 4242424242424242
            errors.cardNumber.validate = false
        }
        if(parseInt(month) === -1){
            errors.month.fill = false
        }
        if(isEmpty(year)){
            errors.year.fill = false
        }
        if(!validateCardMonthYear(year, month)){
            errors.month.validate = false
            errors.year.validate = false
        }
        if(isEmpty(data.cvv)){
            errors.cvv.fill = false
        }
        if(!validateCVV(data.cardNumber, data.cvv)){
            errors.cvv.validate = false
        }
        setPaymentError(errors)

        // Check if there is any problem (fill or validate errors for at least one element in error array)
        let problem = Object.values(errors).some(error => !error.fill || !error.validate)
        return problem
    }

    function handleCardChange(e){
        setCardNumber(e.target.value)
    }
    function handleCVVChange(e){
        setCvv(e.target.value)
    }

    return <div className="payment_container">
        <Row>
            <Col sm={12}>
                <label htmlFor="card_number">{translate({lang: lang, info: "card_number"})}</label>
                <input 
                    value={cardNumber} 
                    className="input_light" 
                    type="text" 
                    placeholder="4242424242424242" 
                    id="card_number" 
                    name="card_number"
                    onChange={(e)=>handleCardChange(e)}
                />
                {!paymentError.cardNumber.fill ? <div className="alert alert-danger">
                    <p>{translate({lang: lang, info: paymentError.cardNumber.fill_message})}</p>
                </div> : <>
                    {!paymentError.cardNumber.validate ? <div className="alert alert-danger">
                        <p>{translate({lang: lang, info: paymentError.cardNumber.validate_message})}</p>
                    </div> : null}
                </>}
            </Col>
        </Row>
        <Row>
            <Col sm={4}>
                <div className="dropdown_box">
                    <label>{translate({lang: lang, info: "month"})}</label>
                    <DropdownButton title={monthOptions[month] ? translate({lang: lang, info: monthOptions[month]}) : "-"} onSelect={(e)=>changeMonth(e)}>
                        {months.map((x, i)=>{
                            return <Dropdown.Item key={i} eventKey={x}>{translate({lang: lang, info: monthOptions[x]})}</Dropdown.Item>
                        })}
                    </DropdownButton>
                </div>                
                {!paymentError.month.fill ? <div className="alert alert-danger">
                    <p>{translate({lang: lang, info: paymentError.month.fill_message})}</p>
                </div> : <>
                    {!paymentError.month.validate ? <div className="alert alert-danger">
                        <p>{translate({lang: lang, info: paymentError.month.validate_message})}</p>
                    </div> : null}
                </>}
            </Col>
            <Col sm={4}>
                <div className="dropdown_box">
                    <label>{translate({lang: lang, info: "year"})}</label>
                    <DropdownButton title={year ? year : "-"} onSelect={(e)=>changeYear(e)}>
                        {yearOptions.map((x, i)=>{
                            return <Dropdown.Item key={i} eventKey={x}>{x}</Dropdown.Item>
                        })}
                    </DropdownButton>
                </div>
                {!paymentError.year.fill ? <div className="alert alert-danger">
                    <p>{translate({lang: lang, info: paymentError.year.fill_message})}</p>
                </div> : <>
                    {!paymentError.year.validate ? <div className="alert alert-danger">
                        <p>{translate({lang: lang, info: paymentError.year.validate_message})}</p>
                    </div> : null}
                </>}             
            </Col>
            <Col sm={4}>
                <label htmlFor="cvv">{translate({lang: lang, info: "cvv"})}</label>
                <input 
                    value={cvv} 
                    className="input_light" 
                    type="text" 
                    placeholder="123" 
                    id="cvv" 
                    name="cvv"
                    onChange={(e)=>handleCVVChange(e)}
                />
                {!paymentError.cvv.fill ? <div className="alert alert-danger">
                    <p>{translate({lang: lang, info: paymentError.cvv.fill_message})}</p>
                </div> : <>
                    {!paymentError.cvv.validate ? <div className="alert alert-danger">
                        <p>{translate({lang: lang, info: paymentError.cvv.validate_message})}</p>
                    </div> : null}
                </>}
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
                <div className="button_action_group">
                    <Button type="button" className="mybutton button_fullcolor01" onClick={()=>handlePay({cardNumber, month, year, cvv})}>
                        {paymentSending ? <span>Loading...</span> : <>
                            <FontAwesomeIcon icon={faCartShopping} />&nbsp;
                            <span>{translate({lang: lang, info: "pay"})}</span>
                        </>}
                    </Button>
                </div>
            </Col>
        </Row>
    </div>
}

export default Stripe