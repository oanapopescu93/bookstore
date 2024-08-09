import React from 'react'
import { translate } from '../../../translations/translate'

function Menu(props) {
    const { menuToggle, home, settings } = props
    const { headerList } = home
    const { lang } = settings    

    function handleMenuChoice(e){
        if(typeof props.handleMenuChoice === "function"){
            props.handleMenuChoice(e)
        }
    }

    const categories = headerList.filter(item => item.choice === 'category')
    const otherItems = headerList.filter(item => item.choice !== 'category')
    const groupedCategories = categories.reduce((acc, category) => {
        if (!acc[category.type]) {
            acc[category.type] = []
        }
        acc[category.type].push(category)
        return acc
    }, {})    
    
    return <div className={menuToggle ? "menu_container open" : "menu_container"}>
        <ul className="menu">
            <li className="menu_item">
                <h4>{translate({lang: lang, info: "categories"})}</h4>
                <div className="menu_content">
                    {Object.keys(groupedCategories).map((type, index) => (
                        <div className="menu_column" key={index}>
                            <h4 onClick={() => handleMenuChoice({choice: "category", type})}>{translate({lang: lang, info: type})}</h4>
                            <ul>
                                {groupedCategories[type].map((category, subindex) => (
                                    <li key={subindex} onClick={() => handleMenuChoice(category)}>
                                        {category.subtype ? translate({lang: lang, info: category.subtype}) : translate({lang: lang, info: type})}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </li>
            {otherItems.map((item, index) => (
                <li className="menu_item" key={index} onClick={()=>handleMenuChoice({choice: item.type})}>
                    <h4>{translate({lang: lang, info: item.type})}</h4>
                </li>
            ))}
        </ul>
    </div>
}

export default Menu