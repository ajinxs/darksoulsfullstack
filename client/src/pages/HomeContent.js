import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import MoonlightSword from '../images/MoonlightSword.png';
import DarkSoulsModel from '../images/DarkSoulsModel.png';
import EstuskFlask from '../images/EstuskFlask.png';
import MagicRing from '../images/MagicRing.png';
import './HomeContent.css';

const homeContent = () => {
    return(
        <>
        <div className='homeOptions'>
            <CardDeck>
                    <Card className="card">
                        <Card.Img className="card-img-top" variant="top" src={MoonlightSword} />
                        <Card.Body>
                            <Card.Title>Weapons Guide</Card.Title>
                            <Card.Text>
                                Weapons Info
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="card">
                        <Card.Img className="card-img-top" variant="top" src={DarkSoulsModel} />
                        <Card.Body>
                            <Card.Title>Character Customization</Card.Title>
                            <Card.Text>
                                Class Build
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="card">
                        <Card.Img className="card-img-top" variant="top" src={EstuskFlask} />
                        <Card.Body>
                            <Card.Title>Items Guide</Card.Title>
                            <Card.Text>
                                Hidden Items and more
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="card">
                        <Card.Img className="card-img-top" variant="top" src={MagicRing} />
                        <Card.Body>
                            <Card.Title>Equiment Guide</Card.Title>
                            <Card.Text>
                                Hidden and Best Armor
                            </Card.Text>
                        </Card.Body>
                    </Card>
            </CardDeck>
            </div>
        </>
    )
}

export default homeContent;