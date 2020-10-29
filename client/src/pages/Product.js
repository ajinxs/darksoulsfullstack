import React from 'react';
import { Card, CardDeck, Button } from 'react-bootstrap';
import BlackKnight from '../images/Products/Black_Knight.jpg'
import DarkFig from '../images/Products/Dark_Fig.jpg'
import DarkFig1 from '../images/Products/Dark_Fig1.jpg'
import DarkSit from '../images/Products/Dark_Sit.jpg'
import DarkSoulsBlack from '../images/Products/dark_souls_black.jpg'
import DarkWall from '../images/Products/Dark_Wall.jpg'
import EditionOne from '../images/Products/EditionOne.jpg'
import EditionTwo from '../images/Products/EditionTwo.jpg'
import HeadlessDemon from '../images/Products/Headless_demon.jpg'
import RingSteel from '../images/Products/Ring_Steel.jpg'
import SilverCatRing from '../images/Products/Silvercat.jpg'
import Wolf from '../images/Products/Wolf.jpg'
import FooterBar from './Footer.js';


const product = () =>(
    <>
        <CardDeck style={{ float: "left", textAlign: "center", marginTop: '4rem', marginLeft: '1rem', marginRight: '1rem' }}>
            <Card className="block-example border border-danger">
                <Button variant="light"><Card.Img className="card-img-top" variant="top" src={BlackKnight} /></Button>
                    <Card.Body>
                        <Card.Title>Black Knight</Card.Title>
                            <Card.Text>
                                $120
                            </Card.Text>
                    </Card.Body>
            </Card>
            <Card className="block-example border border-danger">
                <Button variant="light"><Card.Img className="card-img-top" variant="top" src={DarkFig} /></Button>
                    <Card.Body>
                        <Card.Title>Knight Character (2 actions)</Card.Title>
                            <Card.Text>
                                $150
                            </Card.Text>
                    </Card.Body>
            </Card>
            <Card className="block-example border border-danger">
                <Button variant="light"><Card.Img className="card-img-top" variant="top" src={DarkFig1}/></Button>
                    <Card.Body>
                        <Card.Title>Big Head Knight</Card.Title>
                            <Card.Text>
                                $70
                            </Card.Text>
                    </Card.Body>
            </Card>
            <Card className="block-example border border-danger">
                <Button variant="light"><Card.Img className="card-img-top" variant="top" src={DarkSit} /></Button>
                    <Card.Body>
                        <Card.Title>Knight Knee Down</Card.Title>
                            <Card.Text>
                                $70
                            </Card.Text>
                    </Card.Body>
            </Card>
            <Card className="block-example border border-danger">
                <Button variant="light"><Card.Img className="card-img-top" variant="top" src={DarkSoulsBlack} /></Button>
                    <Card.Body>
                        <Card.Title>Black Knight Offering</Card.Title>
                            <Card.Text>
                                $70
                            </Card.Text>
                    </Card.Body>
            </Card>
        </CardDeck>

        <CardDeck style={{ float: "left", textAlign: "center", marginTop: '4rem', marginLeft: '1rem', marginRight: '1rem' }}>
            <Card className="block-example border border-danger">
                <Button variant="light"><Card.Img className="card-img-top" variant="top" src={DarkWall}/></Button>
                    <Card.Body>
                        <Card.Title>Knight (Wall Surrounding)</Card.Title>
                            <Card.Text>
                                $70
                            </Card.Text>
                    </Card.Body>
            </Card>
            <Card className="block-example border border-danger">
                <Button variant="light"><Card.Img className="card-img-top" variant="top" src={HeadlessDemon}/></Button>
                    <Card.Body>
                        <Card.Title>Headless Demon</Card.Title>
                            <Card.Text>
                                $99
                            </Card.Text>
                    </Card.Body>
            </Card>
            <Card className="block-example border border-danger">
                <Button variant="light"><Card.Img className="card-img-top" variant="top" src={Wolf}/></Button>
                    <Card.Body>
                        <Card.Title>Wolf with Sword (Boss)</Card.Title>
                            <Card.Text>
                                $99
                            </Card.Text>
                    </Card.Body>
            </Card>
            <Card className="block-example border border-danger">
            <Button variant="light"><Card.Img className="card-img-top" variant="top" src={RingSteel}/></Button>
                    <Card.Body>
                        <Card.Title>Steel Ring</Card.Title>
                            <Card.Text>
                                $50
                            </Card.Text>
                    </Card.Body>
            </Card>
            <Card className="block-example border border-danger">
            <Button variant="light"><Card.Img className="card-img-top" variant="top" src={SilverCatRing}/></Button>
                    <Card.Body>
                        <Card.Title>Cat Ring</Card.Title>
                            <Card.Text>
                                $50
                            </Card.Text>
                    </Card.Body>
            </Card>
        </CardDeck>

        <CardDeck style={{ float: "left", textAlign: "center", marginTop: '4rem', marginLeft: '1rem', marginRight: '1rem', marginBottom: '1rem' }}>
            <Card className="block-example border border-danger">
            <Button variant="light"><Card.Img className="card-img-top" variant="top" src={EditionOne}/></Button>
                    <Card.Body>
                        <Card.Title>Collection Limited Edition</Card.Title>
                            <Card.Text>
                                $199
                            </Card.Text>
                    </Card.Body>
            </Card>
            <Card className="block-example border border-danger">
                <Button variant="light"><Card.Img className="card-img-top" variant="top" src={EditionTwo}/></Button>
                    <Card.Body>
                        <Card.Title>Collection Limited Edition</Card.Title>
                            <Card.Text>
                                $199
                            </Card.Text>
                    </Card.Body>
            </Card>
        </CardDeck>
        <FooterBar/>
    </>
)

export default product;
