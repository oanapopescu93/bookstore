import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { translate } from '../../../translations/translate'
import { validateInput } from '../../../utils/validate'
import { postData } from '../../../utils/utils'

function Contact(props) {
    const { home, settings } = props
    const { contact } = home
    const { lang } = settings

    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const [errorEmail, setErrorEmail] = useState(false)
    const [errorSubject, setErrorSubject] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const [sendResults, setSendResults] = useState(null)
    const [emailSending, setEmailSending] = useState(false)

    function handleChange(type, e){
        switch(type) {
            case "email":
                setEmail(e.target.value)
                break
            case "subject":
                setSubject(e.target.value)
                break
            case "message":
                setMessage(e.target.value)
                break
            default:              
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        setErrorSubject(false)
        setErrorMessage(false)
        setErrorEmail(false)
        
        if(subject !== "" && message !== "" && email !== "" && validateInput('email', email)){
            setEmailSending(true)
            postData("/api/contact", {subject, message, email}).then((data) => {
                setEmailSending(false)
                if(data && data.send){
                    setSendResults(data.send)
                    setTimeout(() => {
                        setSendResults(null)
                    }, 1500)
                }
            })
        } else {
            if(subject === ""){
                setErrorSubject(true)
            }
            if(message === ""){
                setErrorMessage(true)
            }
            if(email === "" || !validateInput('email', email)){
                setErrorEmail(true)
            }
        }
    }

    return <div className="page page_box">     
        <Container>
            <Row>
                <Col sm={12}>
                    <h2 className="title_line"><span>{translate({lang: lang, info: "contact"})}</span></h2>
                </Col>
                <Col sm={12}>
                    <Row className="contact_form_container"> 
                        <Col md={4} className="contact_form_info contact_form_info_small">
                            <a href={`mailto:${contact.email}`}>{contact.email}</a>
                        </Col>
                        <Col md={8}>
                            <Form className="contact_form">
                                <Row>
                                    <Col sm={12} className="label_container">
                                        <div className="label">{translate({lang: lang, info: "email"})}</div>
                                    </Col>
                                    <Col sm={12}>
                                        <input className="input_light" type="text" value={email} onChange={(e)=>{handleChange('email', e)}}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} className="label_container">
                                        <div className="label">{translate({lang: lang, info: "subject"})}</div>
                                    </Col>
                                    <Col sm={12}>
                                        <input className="input_light" type="text" value={subject} onChange={(e)=>{handleChange('subject', e)}}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={12} className="label_container">
                                        <div className="label">{translate({lang: lang, info: "message"})}</div>
                                    </Col>
                                    <Col sm={12}>
                                        <textarea className="input_light" type="text" value={message} onChange={(e)=>{handleChange('message', e)}}/>
                                    </Col>
                                </Row>
                                {(() => {
                                    if(errorEmail || errorSubject || errorMessage){
                                        return <div className="alert alert-danger">
                                            {errorEmail ? <p className="text_red">{translate({lang: lang, info: "incorrect_email"})}</p> : null}
                                            {errorSubject ? <p className="text_red">{translate({lang: lang, info: "empty_input_subject"})}</p> : null}                                    
                                            {errorMessage ? <p className="text_red">{translate({lang: lang, info: "empty_input_message"})}</p> : null}
                                        </div>
                                    }
                                })()}
                                {emailSending ? <p style={{marginBottom : "5px", textAlign: "center"}}>{translate({lang: lang, info: "sending"})}</p> : null}
                                {(() => {                
                                    if(sendResults === "email_send"){
                                        return <div className="alert alert-success">
                                            <a href="https://www.mailtrap.io" className="text_green">
                                                {translate({lang: lang, info: sendResults})}
                                            </a>
                                        </div>
                                    } else if(sendResults === "email_no_send"){
                                        return <div className="alert alert-danger">
                                            <p className="text_red">{translate({lang: lang, info: sendResults})}</p>
                                        </div>
                                    }
                                })()}
                                <Row>
                                    <Col>
                                        <Button type="button" onClick={(e)=>handleSubmit(e)} className="mybutton button_fullcolor01">
                                            {translate({lang: lang, info: "send"})}
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                        <Col md={4} className="contact_form_info contact_form_info_big">
                            <a href={`mailto:${contact.email}`}>{contact.email}</a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
}

export default Contact