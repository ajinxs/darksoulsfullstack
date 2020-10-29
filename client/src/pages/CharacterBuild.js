import React, { Component } from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import CharacterBuildData from '../weapons/Build.json';
import FooterBar from './Footer.js';

class CharacterBuild extends Component{
    render(){
        return(
    <div>
        <h1>Character Build Guide</h1>
        { CharacterBuildData.map((buildDetail, index)=>{
            return <div> 
                 <CardDeck style={{ width: '18rem', float: "left", textAlign: "center", marginTop: '2rem', marginLeft: '2rem' }}>
                        <Card className="block-example border border-danger">
                            <Card.Body>
                                <Card.Title><h5>{buildDetail.starting_class}</h5></Card.Title>
                                <Card.Text>
                                    <p>Strength:        {buildDetail.strength}</p>
                                    <p>Attunement:      {buildDetail.attunement}</p>
                                    <p>Endurance:       {buildDetail.endurance}</p>
                                    <p>Vigor:           {buildDetail.vigor}</p>
                                    <p>Vitality:        {buildDetail.vitality}</p>
                                    <p>Intelligence:    {buildDetail.intelligence}</p>
                                    <p>Faith:           {buildDetail.faith}</p>
                                    <p>Covenant:        {buildDetail.covenant}</p>
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

export default CharacterBuild;