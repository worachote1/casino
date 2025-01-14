import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import under_construction_icon from '../../img/icons/under_construction_icon.png'
import {game_visible} from '../../actions/actions'
import { useDispatch } from 'react-redux'

function Terms(props){
    let lang = props.info.lang
    let dispatch = useDispatch()
    function handleBack() {
        dispatch(game_visible("game"))
    }	
    return (
        <Row>
            <Col sm={12}>
                <h2>{lang === "ro" ? <span>Termeni si conditii</span> : <span>Terms and Conditions</span>}</h2>
                <img className="under_construction_icon" alt="under construction" src={under_construction_icon} />
            </Col>
            <Col sm={12}>
                <Button className="button_table shadow_convex" type="button" onClick={()=>handleBack()}>
                    {lang === "ro" ? <span>Inapoi</span> : <span>Back</span>}
                </Button>
            </Col>
        </Row>
	)
}

export default Terms