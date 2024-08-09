import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { translate } from '../../../translations/translate'

function TermsConditions(props) {
    const { settings } = props
    const { lang } = settings
    
    return (
        <div className="page page_box">
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="page_title">
                            <h2 className="title_line">
                                <span>{translate({ lang: lang, info: "terms_conditions" })}</span>
                            </h2>
                        </div>
                        <div className="page_body">
                            <h3><strong>{translate({ lang: lang, info: "general_terms" })}</strong></h3>
                            <p>{translate({ lang: lang, info: "general_terms_text" })}</p>                            
                            <h3><strong>{translate({ lang: lang, info: "ebooks_purchasing" })}</strong></h3>
                            <p>{translate({ lang: lang, info: "ebooks_purchasing_text" })}</p>
                            <h3><strong>{translate({ lang: lang, info: "payment_options" })}</strong></h3>
                            <p>{translate({ lang: lang, info: "payment_options_text" })}</p>
                            <h3><strong>{translate({ lang: lang, info: "refund_policy" })}</strong></h3>
                            <p>{translate({ lang: lang, info: "refund_policy_text" })}</p>
                            <h3><strong>{translate({ lang: lang, info: "privacy_policy" })}</strong></h3>
                            <p>{translate({ lang: lang, info: "privacy_policy_text" })}</p>
                            <h3><strong>{translate({ lang: lang, info: "user_responsibility" })}</strong></h3>
                            <p>{translate({ lang: lang, info: "user_responsibility_text" })}</p>
                            <h3><strong>{translate({ lang: lang, info: "contact_information" })}</strong></h3>
                            <p>{translate({ lang: lang, info: "contact_information_text" })}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TermsConditions