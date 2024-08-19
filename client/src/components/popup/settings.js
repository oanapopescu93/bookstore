import React from 'react'
import Currency from '../settings/currency'
import Language from '../settings/language'
import { translate } from '../../translations/translate'
import Date from '../settings/date'

function Settings(props) {
    const {settings} = props
    const {lang, date, currency} = settings

    return <div className="settings">
        <div className="settings_box">
            <h4>{translate({lang: lang, info: "language"})}</h4>
            <Language title={lang} />
        </div>
        <div className="settings_box">
            <h4>{translate({lang: lang, info: "date"})}</h4>
            <Date title={date} />
        </div>
        <div className="settings_box">
            <h4>{translate({lang: lang, info: "currency"})}</h4>
            <Currency title={currency} {...props} />
        </div>
    </div>
}

export default Settings