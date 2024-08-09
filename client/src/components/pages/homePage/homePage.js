import React from 'react'
import Banner from '../../partials/banner'
import FeaturedCategories from './FeaturedCategories'
import PromotionalOffers from './promotionalOffers'
import { Container, Row, Col } from 'react-bootstrap'

function HomePages(props) {
    return <div className="page">
        <Banner {...props} template="home" />
        <Container>
            <Row>
                <Col sm={12}>
                    <FeaturedCategories {...props} handleMenuChoice={(e)=>props.handleMenuChoice(e)}/>
                    <PromotionalOffers {...props} handleMenuChoice={(e)=>props.handleMenuChoice(e)}/>
                </Col>
            </Row>
        </Container>
    </div>
}

export default HomePages