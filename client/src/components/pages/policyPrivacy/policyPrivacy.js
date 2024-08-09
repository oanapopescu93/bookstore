import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { translate } from '../../../translations/translate'

function PolicyPrivacy(props) {
    const { settings } = props
    const { lang } = settings
    
    return (
        <div className="page page_box">
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="page_title">
                            <h2 className="title_line">
                                <span>{translate({ lang: lang, info: "policy_privacy" })}</span>
                            </h2>
                        </div>
                        <div className="page_body">
                            <h3><strong>{translate({ lang: lang, info: "introduction" })}</strong></h3>
                            <p>{translate({ lang: lang, info: "introduction_text" })}</p>
                            <h3><strong>{translate({ lang: lang, info: "data_collection" })}</strong></h3>
                            <p>{translate({ lang: lang, info: "data_collection_text" })}</p>                            
                            <h3><strong>{translate({ lang: lang, info: "data_usage" })}</strong></h3>
                            <p>{translate({ lang: lang, info: "data_usage_text" })}</p>                            
                            <h3><strong>{translate({ lang: lang, info: "data_sharing" })}</strong></h3>
                            <p>{translate({ lang: lang, info: "data_sharing_text" })}</p>                            
                            <h3><strong>{translate({ lang: lang, info: "data_security" })}</strong></h3>
                            <p>{translate({ lang: lang, info: "data_security_text" })}</p>                            
                            <h3><strong>{translate({ lang: lang, info: "cookies_policy" })}</strong></h3>
                            <p>{translate({ lang: lang, info: "cookies_policy_text" })}</p>                            
                            <h3><strong>{translate({ lang: lang, info: "data_retention" })}</strong></h3>
                            <p>{translate({ lang: lang, info: "data_retention_text" })}</p>                            
                            <h3><strong>{translate({ lang: lang, info: "user_rights" })}</strong></h3>
                            <p>{translate({ lang: lang, info: "user_rights_text" })}</p>                            
                            <h3><strong>{translate({ lang: lang, info: "policy_updates" })}</strong></h3>
                            <p>{translate({ lang: lang, info: "policy_updates_text" })}</p>                            
                            <h3><strong>{translate({ lang: lang, info: "contact_us" })}</strong></h3>
                            <p>{translate({ lang: lang, info: "contact_us_text" })}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PolicyPrivacy
