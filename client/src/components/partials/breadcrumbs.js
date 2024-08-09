import React from 'react'
import { translate } from '../../translations/translate'

function Breadcrumbs(props) {
    const { details, settings } = props
    const { lang } = settings

	return <div className="breadcrumbs_container">
        <ul className="breadcrumbs">
            <li className="breadcrumb_item" onClick={()=>props.handleBreadcrumbs({choice: "home"})}>
                <span>{translate({lang: lang, info: "home"})}</span>&nbsp;/&nbsp;
            </li>
            {details.type ? <li className="breadcrumb_item" onClick={()=>props.handleBreadcrumbs({choice: "category", type: details.type})}>
                <span>{translate({lang: lang, info: details.type})}</span>&nbsp;/&nbsp;
            </li> : null}
            {details.subtype && details.subtype !== details.type ? <li className="breadcrumb_item" onClick={()=>props.handleBreadcrumbs({choice: "category", type: details.type, subtype: details.subtype})}>
                <span>{translate({lang: lang, info: details.subtype})}</span>&nbsp;/&nbsp;
            </li> : null}
            <li className="breadcrumb_item active">{details.title}</li>
        </ul>
    </div>
}

export default Breadcrumbs