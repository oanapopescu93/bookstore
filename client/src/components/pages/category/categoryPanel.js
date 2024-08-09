import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import { Dropdown, DropdownButton, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { translate } from '../../../translations/translate'

function CategoryPanel(props){ 
    const { minPrice, maxPrice, authors, productsTags, productsFormats, filters, settings } = props
    const { lang } = settings
    
    const [sliderValue, setSliderValue] = useState(null)
    const [author, setAuthor] = useState(null)
    const [selectedTags, setSelectedTags] = useState([])
    const [selectedFormats, setSelectedFormats] = useState([])

    useEffect(() => {
        setSliderValue(filters[0].value)
        setAuthor(filters[1].value)
        setSelectedTags(filters[2].value)
        setSelectedFormats(filters[3].value)
    }, [filters])

    function handleSliderChange(e){
        setSliderValue(parseInt(e.target.value))
        props.handleFilter({type: "max_price", value: parseInt(e.target.value)})
    }

    function handleAuthorChange(e){
        setAuthor(e)
        props.handleFilter({type: "author", value: e})
    }

    function handleTagClick(tag){
        setSelectedTags(prevTags => {
            if (prevTags.includes(tag)) {   
                let value = prevTags.filter(t => t !== tag) 
                props.handleFilter({type: "tags", value})            
                return value
            } else {  
                let value = [...prevTags, tag]
                props.handleFilter({type: "tags", value})              
                return value
            }
        })
    }

    function handleFormatClick(format){
        setSelectedFormats(prevFormats => {
            if (prevFormats.includes(format)) {   
                let value = prevFormats.filter(t => t !== format) 
                props.handleFilter({type: "formats", value})            
                return value
            } else {  
                let value = [...prevFormats, format]
                props.handleFilter({type: "formats", value})              
                return value
            }
        })
    }
    
    return <>{minPrice && maxPrice && authors && productsTags  ? <div className="category_panel">
        <div className="category_panel_box">
            <h4>{translate({lang: lang, info: "range_slider"})}</h4>
            <Form.Range
                value={sliderValue ? sliderValue : parseInt(maxPrice)}
                min={parseInt(minPrice)} 
                max={parseInt(maxPrice)} 
                onChange={(e)=>handleSliderChange(e)}
                className="custom_slider"/>
            <p className="accent02">{translate({lang: lang, info: "max_price"})}: {sliderValue ? sliderValue : parseInt(maxPrice)}</p>
        </div>
        <div className="category_panel_box">
            <h4>{translate({lang: lang, info: "filter_by_author"})}</h4>
            <DropdownButton id="dropdown-author" title={author ? author : translate({lang: lang, info: "select_author"})}>
                {authors.map((author, index) => (
                    <Dropdown.Item key={index} onClick={() => handleAuthorChange(author)}>
                        {author}
                    </Dropdown.Item>
                ))}
            </DropdownButton>
        </div>
        <div className="category_panel_box">
            <h4>{translate({lang: lang, info: "filter_by_tag"})}</h4>
            <div className="category_panel_box_tag">
                {productsTags.map(tag => (
                    <div 
                        key={tag} 
                        className={`tag_item ${selectedTags.includes(tag) ? 'selected' : ''}`} 
                        onClick={()=>handleTagClick(tag)}
                    ><div className="tag_button">{tag}</div></div>
                ))}
            </div>
        </div>
        <div className="category_panel_box">
            <h4>{translate({lang: lang, info: "filter_by_format"})}</h4>
            <div className="category_panel_box_format">
                {productsFormats.map(tag => (
                    <div 
                        key={tag} 
                        className={`format_item ${selectedFormats.includes(tag) ? 'selected' : ''}`} 
                        onClick={()=>handleFormatClick(tag)}
                    ><div className="format_button">{tag}</div></div>
                ))}
            </div>
        </div>
        <div className="category_panel_box">
            <Button type="button" className="mybutton round button_fullcolor01" onClick={()=>props.handleResetFilters()}>
                <FontAwesomeIcon icon={faTrashCan} />
            </Button>
        </div>
    </div> : null}</>
}

export default CategoryPanel