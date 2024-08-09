import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { changePage } from '../../reducers/page'
import { translate } from '../../translations/translate'

function Footer(props){
    const { settings } = props
    const { lang } = settings

    const [date, setDate] = useState('')
    let dispatch = useDispatch()

    useEffect(() => {
        handleDate()        
    }, [])

    function handleDate(){
        let my_date = new Date()
		my_date = my_date.getFullYear()
        setDate(my_date)
    }

    function handleClick(choice){
        dispatch(changePage({choice}))
    }

    return <div className="footer_container">
        <div className="footer_list">
            <ul>
                <li onClick={()=>{handleClick('about')}}><span>{translate({lang: lang, info: "about"})}</span></li>
                <li onClick={()=>{handleClick('terms_cond')}}><span>{translate({lang: lang, info: "terms_conditions"})}</span></li>
                <li onClick={()=>{handleClick('policy_privacy')}}><span>{translate({lang: lang, info: "policy_privacy"})}</span></li>
                <li onClick={()=>{handleClick('contact')}}><span>{translate({lang: lang, info: "contact"})}</span></li>
            </ul>
        </div>
        <footer>
            <h6>Copyright © <span id="copyright_year">{date}</span> Oana Popescu. {translate({lang: lang, info: "all_rights_reserved"})}.</h6>
        </footer>
    </div>
}
export default Footer