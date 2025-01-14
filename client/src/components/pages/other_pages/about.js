import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {game_visible} from '../../actions/actions'
import { useDispatch } from 'react-redux'

function About(props){
    let lang = props.info.lang
    let dispatch = useDispatch()

    function handleBack() {
        dispatch(game_visible("game"))
    }

	return (
        <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
                <Row>
                    <Col sm={12}>
                    <h2>{lang === "ro" ? <span>Despre noi</span> : <span>About us</span>}</h2>
                    {lang === "ro" ? 
                        <div className="about_container">
                            <p>Acesta este un proiect personal</p>
                            <p>Aici veti gasi jocuri tip cazino:</p>
                            <ul className="about_box">
                                <li>Ruleta americana si europeana</li>
                                <li>Blackjack</li>
                                <li>Pacanele</li>
                                <li>Craps (un fel de Barbut)</li>
                                <li>Curse</li>
                                <li>Keno</li>
                            </ul>
                            <p>Totul este facut cu Javascript, HTML Canvas, ReactJS, NodeJS, MySQL</p>
                            <p>Sper ca va place proiectul</p>
                        </div> : 
                        <div className="about_container">
                            <p>This is a pet project</p>
                            <p>Here you will find casino type games:</p>
                            <ul className="about_box list_circle">
                                <li>American and European Roulette</li>
                                <li>Blackjack</li>
                                <li>Slots</li>
                                <li>Craps</li>
                                <li>Race</li>
                                <li>Keno</li>
                            </ul>
                            <p>Everything is made with Javascript, HTML Canvas, ReactJS, NodeJS, MySQL</p>
							<p>I used Heroku and db4free.net</p>
                            <p>I hope you like the project</p>
                        </div>
                    }
                    </Col>
                    <Col sm={12}>
                        <Button className="button_table shadow_convex" type="button" onClick={()=>handleBack()}>
                            {lang === "ro" ? <span>Inapoi</span> : <span>Back</span>}
                        </Button>
                    </Col>
                </Row>
            </Col>
            <Col sm={2}></Col>            
        </Row>
	)
}

export default About