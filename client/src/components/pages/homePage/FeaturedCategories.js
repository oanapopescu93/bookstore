import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { translate } from '../../../translations/translate'

function FeaturedCategories(props) {
    const { settings } = props
    const { lang } = settings

    let categories = [
        {
            title: "fiction", 
            description: {
                definition: "fiction_definition",
                genres: "fiction_genres"
            }
        },
        {
            title: "non_fiction", 
            description: {
                definition: "non_fiction_definition",
                genres: "non_fiction_genres"
            }
        },
        {
            title: "children", 
            description: {
                definition: "children_definition",
                genres: "children_genres"
            }
        },
    ]

    return <>
        {categories && categories.length > 0 ? <div className="featured_categories_container">
            <h2 className="title_line"><span>{translate({lang: lang, info: "featured_categories"})}</span></h2>
            <div className="featured_categories">
                {categories.map((category, index) => (
                    <div key={index} className="category_box">
                        <div className="category_card shadow_convex">
                            <h3>{translate({lang: lang, info: category.title})}</h3>
                            <div className="category_card_box">                                
                                <p>{translate({lang: lang, info: category.description.definition})}</p>
                                <p>{translate({lang: lang, info: "examples"})}:</p>
                                <p>{translate({lang: lang, info: category.description.genres})}</p>
                                <div className="button_action_group">
                                    <Button type="button" className="mybutton round button_fullcolor01" onClick={()=>props.handleMenuChoice({choice: "category", type: category.title})}>
                                        <FontAwesomeIcon icon={faBookOpen} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div> : null}
    </>
}

export default FeaturedCategories