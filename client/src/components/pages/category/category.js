import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CategoryPanel from './categoryPanel'
import Products from './products'
import { useDispatch } from 'react-redux'
import { changePage } from '../../../reducers/page'
import { changeFilters, resetFilters } from '../../../reducers/filters'
import { translate } from '../../../translations/translate'
import { formatPrice } from '../../../utils/utils'

function Category(props) {
    const { page, home, filters, settings } = props
    const { lang } = settings
    
    const [products, setProducts] = useState(home.products)
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)
    const [authors, setAuthors] = useState([])
    const [productsTags, setProductsTags] = useState([])
    const [productsFormats] = useState(["epub", "mobi", "pdf"])

    let dispatch = useDispatch()

    useEffect(() => {
        start()
    }, [page])

    useEffect(() => {
        handleFilters()
    }, [filters])

    function start(){
        let myProducts = [...home.products]
        let filter_type = page.subtype ? page.subtype : page.type

        if(filter_type){
            myProducts = myProducts.filter(product =>
                product.type === filter_type || product.subtype === filter_type
            )            
        }
        setProducts(myProducts)
        
        const newMinPrice = Math.min(...myProducts.map(p => formatPrice(p.price)))
        const newMaxPrice = Math.max(...myProducts.map(p => formatPrice(p.price)))
        const newAuthors = [...new Set(myProducts.map(product => product.author))]
        const getUniqueTags = (products) => {        
            const allTags = products.flatMap(product => product.tags)
            return [...new Set(allTags)]
        }
        const newProductsTags = getUniqueTags(myProducts)

        setMinPrice(newMinPrice)
        setMaxPrice(newMaxPrice + 1)
        setAuthors(newAuthors)
        setProductsTags(newProductsTags)
    }

    function handleFilters(){
        let myProducts = [...home.products]
        let filter_type = page.subtype ? page.subtype : page.type

        if(filter_type){
            myProducts = myProducts.filter(product =>
                product.type === filter_type || product.subtype === filter_type
            )            
        }

        if(filters[0].type === "max_price" && filters[0].value){
            let value = filters[0].value
            myProducts = myProducts.filter(product => formatPrice(product.price) <= value)
        }
        if(filters[1].type === "author" && filters[1].value){
            let value = filters[1].value
            myProducts = myProducts.filter(product => product.author === value)
        }
        if(filters[2].type === "tags" && filters[2].value.length > 0){
            const tags = filters[2].value
            myProducts = myProducts.filter(product => 
                tags.some(tag => product.tags.includes(tag))
            )
        }
        if(filters[3].type === "formats" && filters[3].value.length > 0){
            const formats = filters[3].value
            myProducts = myProducts.filter(product => 
                formats.some(format => product.format.includes(format))
            )
        }

        setProducts(myProducts)
    }

    function handleFilter(filter) {
        dispatch(changeFilters(filter))
    }

    function handleResetFilters(){
        dispatch(resetFilters())
    }

    function handleClick(id){
        let product = home.products.filter(product => product.id === parseInt(id))
        if(product && product[0]){
            let payload = {choice: "product", details: product[0]}
            dispatch(changePage(payload))
        }
    }

    return <div className="page page_box">
        {page.subtype || page.type ? <Container>
            <Row>
                <Col sm={12}>
                    <h2 className="title title_line"><span>{page.subtype ? translate({lang: lang, info: page.subtype}) : translate({lang: lang, info: page.type})}</span></h2>
                </Col>
            </Row>
        </Container> : null}        
        <div className="category_container">
            <Row>
                <Col sm={4} md={4} lg={2} className="category_panel_container">
                    <CategoryPanel 
                        {...props} 
                        minPrice={minPrice}
                        maxPrice={maxPrice}
                        authors={authors}
                        productsTags={productsTags}
                        productsFormats={productsFormats}
                        filters={filters}
                        handleFilter={(e)=>handleFilter(e)} 
                        handleResetFilters={()=>handleResetFilters()}
                    />
                </Col>
                <Col sm={8} md={8} lg={10} className="products_container">
                    <Products {...props} products={products} filters={filters} handleClick={(e)=>handleClick(e)} />
                </Col>
            </Row>
        </div>
    </div>
}

export default Category