import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {game_visible, game_page} from '../../actions/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faComments, faHome, faCog, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { setCookie } from '../../utils'
import Modal from 'react-bootstrap/Modal'
import Settings from './control_settings'
import ChatForm from './chatForm'
import carrot_img from '../../img/icons/carrot_icon.png'

function Panel(props){
    let lang = props.lang
    let socket = props.socket
    let user = props.data.user
    let money = props.data.money
    let streak = props.data.streak ? props.data.streak : 1

    let game_choice = props.game_choice
    let title = game_choice.table_name
    if(game_choice.table_id){
        title += ' ' + game_choice.table_id
    }
    if(game_choice.table_type){
        title += ' ' + game_choice.table_type
    }

    let dispatch = useDispatch()

    const [show, setShow] = useState(false)
    const [open, setOpen] = useState('')
    const [userGame, setUserGame] = useState("active")
    const [userAccount, setUserAccount] = useState("")

    const [panel, setPanel] = useState("user_panel_box")
    const [panelUser, setPanelUser] = useState("active")
    const [panelChat, setPanelChat] = useState("")

	function handleClose(){ setShow(false) }
    function handleShow(){ setShow(true) }
    
    function handleClick(link) {
		switch (link) {
			case "account":
                setUserGame("active")
                setUserAccount("")
                dispatch(game_visible('account'))
			  	break
			case "casino":
                setUserGame("")
                setUserAccount("active")
				dispatch(game_visible('game'))
                dispatch(game_page('current_game'))
				break
            case "salon":					
                dispatch(game_visible("game"))
                dispatch(game_page('salon'))
			 	break
            case "settings":	
                handleShow()
                break
			case "logout":
                setCookie("casino_uuid", '')
                setCookie("casino_user", '')
				setCookie("casino_email", '')
                window.location.href = "/"
			 	break
            case "support":
                dispatch(game_visible('contact'))
                break
			default:
				setCookie("casino_uuid", '')
                setCookie("casino_user", '')
				setCookie("casino_email", '')
                window.location.href = "/"
		  }
	}

    function handleToggle(type){
        if(panel === type){
            if(open === ''){
                setOpen('open')
            } else {
                setOpen('')
            }
        } else {
            setOpen('open')
            setPanel(type)
        }

        switch (type) {
			case "user_panel_box":
                setPanelUser("active")
                setPanelChat("")
			  	break
			case "chat_panel_box":
                setPanelUser("")
                setPanelChat("active")
				break
		}
    }
    
	return (
        <>
            <div className={"panel_container "+open}>

                <div id="user_button" className="button_container" onClick={()=>handleToggle("user_panel_box")}>            
                    <div>
                        <FontAwesomeIcon icon={faUserCircle} />
                        <h4>User</h4>
                    </div>
                </div>
                <div id="chat_button" className="button_container" onClick={()=>handleToggle("chat_panel_box")}>
                    <div>
                        <FontAwesomeIcon icon={faComments} />
                        <h4>Chat</h4>
                    </div>
                </div>

                <div id="user_panel_box" className={"panel_box " + panelUser}>                                    
                    <h4 id="user_title">{title}</h4>
                    <div id="user_subtitle">
                        <div className="user_subtitle_left">
                            <span id="user_name">{user}</span>
                        </div>
                        <div className="user_subtitle_right">
                            <span id="user_money"><span>{money}</span><img alt="carrot_img" className="currency_img" src={carrot_img} /></span>
                            <span id="user_streak">
                                <span>{streak}</span>
                                <div className="my_tooltip">
                                    <i className="fa fa-calendar-o" aria-hidden="true"></i>
                                    {lang === "ro" ? <span className="my_tooltiptext">
                                        <p>Cate zile la rand ai jucat</p>
                                    </span> : <span className="my_tooltiptext">
                                        <p><b>Your streak</b></p>
                                        <p>How many days in a row you have played</p>
                                    </span>}
                                </div>
                            </span>
                        </div>
                    </div>
                    <div id="user_list_user">
                        <div id="user_list_user_game" className={"user_list_button "+userGame} onClick={() => handleClick('casino')}>{lang === "ro" ? <span>Joc</span> : <span>Game</span>}</div>
                        <div id="user_list_user_account" className={"user_list_button "+userAccount} onClick={() => handleClick('account')}>{lang === "ro" ? <span>Contul meu</span> : <span>My account</span>}</div>
                    </div>
                    <ul className="user_list">
                        <li id="user_list_salon" className="user_list_item" onClick={() => handleClick('salon')}>{lang === "ro" ? <span><FontAwesomeIcon icon={faHome} /> Salon</span> : <span><FontAwesomeIcon icon={faHome} /> Salon</span>}</li>
                        <li id="user_list_settings" className="user_list_item" onClick={() => handleClick('settings')}>{lang === "ro" ? <span><FontAwesomeIcon icon={faCog} /> Setari</span> : <span><FontAwesomeIcon icon={faCog} /> Settings</span>}</li>
                        <li id="user_list_logout" className="user_list_item" onClick={() => handleClick('logout')}>{lang === "ro" ? <span><FontAwesomeIcon icon={faPowerOff} /> Delogare</span> : <span><FontAwesomeIcon icon={faPowerOff} /> Logout</span>}</li>
                    </ul>
                    <div id="support_button" onClick={() => handleClick('support')}>{lang === "ro" ? <span>Suport</span> : <span>Support</span>}</div>
                </div>

                <div id="chat_panel_box" className={"panel_box " + panelChat }>
                    <ChatForm uuid={props.data.uuid} user={user} game_choice={game_choice} lang={lang} socket={socket}></ChatForm>
                </div>	

            </div>

            <Modal className="casino_modal" id="settings_modal" show={show} onHide={handleClose} size="sm">
                <Modal.Header closeButton>
                    <Modal.Title>{lang === "ro" ? <span>Setari</span> : <span>Settings</span>}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Settings></Settings>
                </Modal.Body>				
            </Modal>
        </>	
	)
}

export default Panel