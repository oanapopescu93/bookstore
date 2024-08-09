import React from 'react'
import { translate } from '../../../translations/translate'

function AnnouncementBar(props) {
    const { settings } = props
    const { lang } = settings
    return <div className="announcementBar">
        <h6>{translate({lang: lang, info: "amouncement_discount"})}</h6>
    </div>
}

export default AnnouncementBar