import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { translate } from '../../../translations/translate'

function Search(props) {
    const { settings, searchValue } = props
    const { lang } = settings
    
    function handleInputChange(e){
        props.handleInputChange(e.target.value)
    }

    function handleSearchValue(){
        props.handleSearchValue()
    }

    return <div className="search_group">
        <input 
            type="text" 
            value={searchValue} 
            onChange={(e)=>handleInputChange(e)} 
            placeholder={translate({lang: lang, info: "search"})}
        />
        <div className="search_icon" onClick={()=>handleSearchValue()}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
    </div>
}

export default Search