import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { translate } from '../../translations/translate'

function Banner(props) {
    const { template, settings } = props
    const { lang } = settings

	return <div className={"banner_container banner_" + template}>
        <div className="banner">
            {(() => {            
                switch(template){
                    case "home":
                    default:
                        return <>
                            <h2>{translate({lang: lang, info: "banner_title"})}</h2>
                            <p>{translate({lang: lang, info: "banner_text"})}</p>
                            <div className="button_action_group">
                                <Button type="button" className="mybutton round button_fullcolor01" onClick={()=>props.handleMenuChoice({choice: "category"})}>
                                    <FontAwesomeIcon icon={faBookOpen} />
                                </Button>
                            </div>
                        </>
                }
            })()}
        </div>
    </div>
}

export default Banner