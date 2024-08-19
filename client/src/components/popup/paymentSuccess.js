import React from 'react'
import { useSelector } from 'react-redux'
import { convertCurrency, formatDate, formatPrice } from '../../utils/utils'
import { translate } from '../../translations/translate'

function PaymentSuccess(props) {
    const {exchange_rates, settings, data} = props
    const {lang, currency} = settings
    const {payment_id, amount, order_date, cart} = data

    let date_format = useSelector(state => state.settings.date)
    let date = formatDate(order_date, date_format)

    const totalPrice = cart.reduce((total, item) => {
        return total + convertCurrency(formatPrice(item.price, item.selected_format), currency, exchange_rates)
    }, 0)

    console.log(amount, cart, totalPrice)
    return <div className="paymentSuccess">
        <p>{translate({lang: lang, info: 'payment_success_text'})}</p>
        <h3>{translate({lang: lang, info: 'amount'})}: {totalPrice.toFixed(2)} {currency}</h3>
        <h6>
            <span>{translate({lang: lang, info: 'payment'})}:</span>
            <span>{payment_id}</span>
            <span>({date})</span>
        </h6>
    </div>
}
export default PaymentSuccess