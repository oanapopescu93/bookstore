import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { translate } from '../../../translations/translate'

function About(props) {
    const { home, settings } = props
    const { headerList } = home
    const { lang } = settings

    const categories = headerList.reduce((acc, item) => {
        if (item.choice === 'category') {
            if (!acc[item.type]) {
                acc[item.type] = []
            }
            acc[item.type].push(item.subtype)
        }
        return acc
    }, {})
    
    return <div className="page page_box">
        <Container>
            <Row>
                <Col sm={12}>                    
                    <div className="page_title">
                        <h2 className="title_line"><span>{translate({lang: lang, info: "about"})}</span></h2>
                    </div>
                    <div className="page_body">
                        <p>Welcome to <strong>The Book Mouse</strong>, your ultimate destination for discovering and enjoying ebooks across various genres.</p>
                        <p>We offer a vast collection of ebooks in formats such as EPUB, MOBI, and PDF, ensuring compatibility with all major e-readers and devices.</p>
                        <p>At <strong>The Book Mouse</strong>, we specialize in a wide range of genres to cater to all reading preferences.</p>
                        <p>Explore our extensive collection, which includes categories like Fiction, Non-Fiction, and Children's Books.</p>
                        <h3><strong>{translate({ lang: lang, info: "featured_categories" })}</strong></h3>
                        <ul>
                            {Object.keys(categories).map((categoryKey) => {
                                console.log(categories[categoryKey])
                                return <li key={categoryKey}>
                                    <strong>{translate({ lang: lang, info: categoryKey })}:</strong> 
                                    {categories[categoryKey].map((subtype, index) => {
                                        console.log(subtype, translate({ lang: lang, info: subtype }))
                                        return <React.Fragment key={subtype}>
                                            {index > 0 && ', '}
                                            {translate({ lang: lang, info: subtype })}
                                        </React.Fragment>
                                    })}
                                </li>
                            })}
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
}

export default About