import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { Modal} from "react-bootstrap"

import { changePopup } from "../../reducers/popup"
import { translate } from "../../translations/translate"

import Default from "./default"
import Settings from "./settings"
import PaymentSuccess from "./paymentSuccess"

function Popup(props){
    const {settings} = props
    const {lang} = settings

    let open = useSelector(state => state.popup.open)
    let popup_title = useSelector(state => state.popup.title)
    let template = useSelector(state => state.popup.template)
    let data = useSelector(state => state.popup.data)
    let size = useSelector(state => state.popup.size)
    let sticky = useSelector(state => state.popup.sticky)

    let dispatch = useDispatch()

    let title = popup_title ? translate({lang: lang, info: popup_title}) : ""
    let style = template
    if(template === "paymentSuccess"){
        style = "success"
    }

  	function closeModal(){
        dispatch(changePopup(false))
	}

    return <Modal id="myModal" className={"mymodal " + style} show={open} onHide={closeModal} size={size} centered> 
        {title !== "" ? <Modal.Header>
            {!sticky ? <div className="closeButton closeButtonHeader" onClick={closeModal}>
                <span>X</span>
            </div> : null}
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header> : null}
        <Modal.Body>
            {title === "" && !sticky ? <div className="closeButton" onClick={closeModal}>
                <span>X</span>
            </div> : null}
            {(() => {					
                switch (template) {
                    case "settings":
                        return <Settings {...props} />   
                    case "paymentSuccess":
                        return <PaymentSuccess {...props} data={data}/>                  
                    case "error":
                    default:
                        return <>{typeof data === "string" ? <Default settings={settings} text={data} /> : null}</>
                }
            })()}
        </Modal.Body>
    </Modal>
}
export default Popup