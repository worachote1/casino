import React from 'react'
import $ from 'jquery'
import { getCookie, setCookie } from '../../utils'

class Settings extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
              date: "DD/MM/YYYY H:M",
              currency: "carrot"
		}
        this.handleChoose = this.handleChoose.bind(this)
	}

    handleChoose(e, type, choose){  
        if(typeof type !== "undefined" && type !== ""){
            if(typeof choose !== "undefined" && choose !== ""){
                let target = e.target
                let parent = target.parentElement.parentElement
                $(parent).find('.dropbtn').text(choose)
                switch(type){
                    case "date":
                        setCookie("casino_date", choose, 336) //will expire after 14 days
                        break
                    case "currency":
                        setCookie("casino_currency", choose, 336) //will expire after 14 days
                        break		
                    default: 
                        break
                }
            }
        }
    }

    componentDidMount(){
        if(getCookie("casino_date") !== ""){
            this.setState({ date: getCookie("casino_date") })
        }
        if(getCookie("casino_currency") !== ""){
            getCookie({ currency: getCookie("casino_currency") }) 
        }
    }
	
	render(){
		return (
            <div id="settings_container">
                <div className="dropdown_group" style={{'z-index': '2'}}>
                    <p>Date</p>
                    <div className="dropdown">
                        <div className="dropbtn">{this.state.date}</div>
                        <div className="dropdown-content">
                            <div onClick={(e) => this.handleChoose(e, "date", "DD/MM/YYYY H:M")} className="dropdown_item">DD/MM/YYYY H:M</div>
                            <div onClick={(e) => this.handleChoose(e, "date", "MM/DD/YYYY H:M")} className="dropdown_item">MM/DD/YYYY H:M</div>
                        </div>
                    </div>
                </div>
                <div className="dropdown_group" style={{'z-index': '1'}}>
                    <p>Currency</p>
                    <div className="dropdown">
                        <div className="dropbtn">{this.state.currency}</div>
                        <div className="dropdown-content">
                            <div onClick={(e) => this.handleChoose(e, "currency", "garlic")} className="dropdown_item">garlic</div>
                            <div onClick={(e) => this.handleChoose(e, "currency", "onion")} className="dropdown_item">onion</div>
                            <div onClick={(e) => this.handleChoose(e, "currency", "radish")} className="dropdown_item">radish</div>
                            <div onClick={(e) => this.handleChoose(e, "currency", "carrot")} className="dropdown_item">carrot</div>
                            <div onClick={(e) => this.handleChoose(e, "currency", "turnip")} className="dropdown_item">turnip</div>
                            <div onClick={(e) => this.handleChoose(e, "currency", "potato")} className="dropdown_item">potato</div>
                            <div onClick={(e) => this.handleChoose(e, "currency", "cabbage")} className="dropdown_item">cabbage</div>
                        </div>
                    </div>
                </div>				
            </div>
		)
	}
}

export default Settings