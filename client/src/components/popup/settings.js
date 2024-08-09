import React from 'react'
import Currency from '../settings/currency'
import Language from '../settings/language'

function Settings(props) {
    const {settings} = props
    const {lang, currency} = settings

    return <div className="settings">
        <div className="settings_language">
            <h4>language</h4>
            <Language title={lang} />
        </div>
        <div className="settings_currency">
            <h4>currency</h4>
            <Currency title={currency} {...props} />
        </div>
    </div>
}

export default Settings