import React, { useState,useEffect } from 'react'
import { Button, Col, Dropdown, DropdownButton, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import nopic from '../../../img/icons/nopicture.gif'
import Stars from '../../rating/stars'
import { translate } from '../../../translations/translate'
import { formatPrice } from '../../../utils/utils'

function ProductCard(props) {
    const { product, settings } = props
    const { currency } = settings

    return <div className="product_card_container">
        {product.discount > 0 ? <div className="discount">{product.discount}%</div> : null}
        <div className="product_card">
            <div className="cell_info">
                <div className="cell_title" onClick={()=>props.handleClick(product.id)}>
                    <h4>{product.title}</h4>
                </div>
                <p className="cell_author">{product.author}</p>
                <Stars score={product.rating} max={5} />
                <img src={nopic} onClick={()=>props.handleClick(product.id)}/>
                <div className="price_box">
                    <span className="price">{formatPrice(product.price)} {currency}</span>
                </div>
            </div>
            <div className="cell_button">
                <Button type="button" className="mybutton round button_fullcolor02" onClick={()=>props.handleClick(product.id)}>
                    <FontAwesomeIcon icon={faBookOpen} />
                </Button>
            </div>
        </div>
    </div>
}

function Products(props){ 
    const { products, settings } = props
    const { lang } = settings

    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage, setProductsPerPage] = useState(12)
    const [sortOrder, setSortOrder] = useState('asc')
    const [currentPageRange, setCurrentPageRange] = useState(1)

    useEffect(() => {
        setCurrentPage(1)
        setCurrentPageRange(1)
    }, [productsPerPage, sortOrder])

    // Handle sorting
    const sortedProducts = [...products].sort((a, b) => {
        if (sortOrder === 'asc') return a.title.localeCompare(b.title)
        if (sortOrder === 'desc') return b.title.localeCompare(a.title)
        if (sortOrder === 'price-asc') return formatPrice(a.price) - formatPrice(b.price)
        if (sortOrder === 'price-desc') return formatPrice(b.price) - formatPrice(a.price) 
        return 0
    })

    // Calculate the products to display on the current page
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct)

    // Calculate the total number of pages
    const totalPages = Math.ceil(sortedProducts.length / productsPerPage)

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    // Handle products per page change
    const handleProductsPerPageChange = (value) => {
        setProductsPerPage(Number(value))
    }

    // Handle sort order change
    const handleSortOrderChange = (value) => {
        setSortOrder(value)
    }

    // Handle page range change
    const handlePageRangeChange = (rangeNumber) => {
        setCurrentPageRange(rangeNumber)
        setCurrentPage((rangeNumber - 1) * 10 + 1)
    }

    // Generate pagination items
    const renderPagination = () => {
        const startPage = (currentPageRange - 1) * 10 + 1
        const endPage = Math.min(startPage + 9, totalPages)
        const pages = []

        if (currentPageRange > 1) {
            pages.push(<Button key="first" onClick={() => handlePageChange(1)}>First Page</Button>)
            pages.push(<Button key="prev-range" onClick={() => handlePageRangeChange(currentPageRange - 1)}>{`${startPage - 10}-${startPage - 1}`}</Button>)
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <Button
                    key={i}
                    className={`page-item ${currentPage === i ? 'active' : ''}`}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </Button>
            )
        }

        if (endPage < totalPages) {
            pages.push(<Button key="next-range" onClick={() => handlePageRangeChange(currentPageRange + 1)}>{`${endPage + 1}-${Math.min(endPage + 10, totalPages)}`}</Button>)
            pages.push(<Button key="last" onClick={() => handlePageChange(totalPages)}>Last Page</Button>)
        }

        return pages
    }

    return <>{products && products.length > 0 ? <>
            <div className="control_panel">            
            <div className="control_panel_box">
                <span className="dropdown_label">{translate({lang: lang, info: "sort_by"})}:</span>
                <DropdownButton className="light" id="dropdown-sort-order" title={sortOrder.replace('-', ' ').toUpperCase()}>
                    <Dropdown.Item onClick={() => handleSortOrderChange('asc')}>{translate({lang: lang, info: "title_asc"})}</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSortOrderChange('desc')}>{translate({lang: lang, info: "title_desc"})}</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSortOrderChange('price-asc')}>{translate({lang: lang, info: "price_asc"})}</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSortOrderChange('price-desc')}>{translate({lang: lang, info: "price_desc"})}</Dropdown.Item>
                </DropdownButton>
            </div>
            <div className="control_panel_box">
                <span className="dropdown_label">{translate({lang: lang, info: "prod_per_page"})}:</span>
                <DropdownButton className="light" id="dropdown-products-per-page" title={productsPerPage}>
                    <Dropdown.Item onClick={() => handleProductsPerPageChange(12)}>12</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleProductsPerPageChange(24)}>24</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleProductsPerPageChange(48)}>48</Dropdown.Item>
                </DropdownButton>
            </div>
        </div>
        <Row className="products">
            {currentProducts.map(product => (
                <Col key={product.id} sm={12} md={6} lg={3}>
                    <ProductCard product={product} settings={settings} handleClick={(id) => props.handleClick(id)} />
                </Col>
            ))}
        </Row>
        {totalPages > 1 ? <div className="pagination">
            {renderPagination()}
        </div> : null}
    </> : <p>{translate({lang: lang, info: "no_products"})}</p>}</>
}

export default Products