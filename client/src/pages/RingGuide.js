import React, { Component } from 'react';
import RingData from '../weapons/Ring.json';
import { Card, CardDeck } from 'react-bootstrap';
import FooterBar from './Footer.js';

class RingGuide extends Component{
    render(){
        return(
            <div>
            <h1>Ring Guide</h1>
            { RingData.map((ringDetail, index)=>{
                return<div>
                        <CardDeck style={{ width:'18rem', float: "left", textAlign: "center", marginTop: '2rem', marginLeft: '2rem', }}>
                            <Card className="block-example border border-danger">
                                <Card.Body>
                                    <Card.Title> <h5>{ringDetail.name}</h5> </Card.Title>
                                    <Card.Text>
                                        <p>Rank:    {ringDetail.details.rank}</p>
                                        <p>Weight:  {ringDetail.details.weight}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                        <FooterBar/>
                    </div>
                })}
        </div>
        );
    }
}
export default RingGuide;
