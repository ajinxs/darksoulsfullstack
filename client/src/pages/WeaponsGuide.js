import React, { Component } from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import WeaponData from '../weapons/Weapons.json';
import FooterBar from './Footer.js';

class WeaponsGuide extends Component{
    render(){
        return(
    <div>
        <h1>Weapons Guide</h1>
        { WeaponData.map((weaponsDetail, index)=>{
            return <div className='container-fluid'> 
                    <CardDeck style={{ width: '18rem', float: "left", textAlign: "center", marginTop: '2rem', marginLeft: '2rem' }}>
                        <Card className="block-example border border-danger">
                            <Card.Body>
                                <Card.Title><h5>{weaponsDetail.name}</h5></Card.Title>
                                <Card.Text>
                                    <p style={{fontSize:'19px',fontWeight:"bold"}}>Attack</p>
                                    <p>Physical:    {weaponsDetail.atk.physical}</p>
                                    <p>Magic:       {weaponsDetail.atk.magic}</p>
                                    <p>Fire:        {weaponsDetail.atk.fire}</p>
                                    <p>Lightning:   {weaponsDetail.atk.lightning}</p>
                                </Card.Text>
                            </Card.Body>

                            <Card.Body>
                                <Card.Text>
                                    <p style={{fontSize:'19px',fontWeight:"bold"}}>Defence</p>
                                    <p>Physical:    {weaponsDetail.def.physical}</p>
                                    <p>Magic:       {weaponsDetail.def.magic}</p>
                                    <p>Fire:        {weaponsDetail.def.fire}</p>
                                    <p>Lightning:   {weaponsDetail.def.lightning}</p> 
                                    <p>Stab:        {weaponsDetail.def.stab}</p>
                                </Card.Text>
                            </Card.Body>

                            <Card.Body>
                                <Card.Text>
                                    <p style={{fontSize:'19px',fontWeight:"bold"}}>Effects</p>
                                    <p>Poison:      {weaponsDetail.effects.poison}</p>
                                    <p>Bleed:       {weaponsDetail.effects.bleed}</p>
                                    <p>Divine:      {weaponsDetail.effects.divine}</p>
                                    <p>Occult:      {weaponsDetail.effects.occult}</p> 
                                </Card.Text>
                            </Card.Body>

                            <Card.Body>
                                <Card.Text>
                                    <p style={{fontSize:'19px',fontWeight:"bold"}}>Require</p>
                                    <p>Strenght:        {weaponsDetail.req.strength}</p>
                                    <p>Dexterity:       {weaponsDetail.req.dexterity}</p>
                                    <p>Intelligence:    {weaponsDetail.req.intelligence}</p>
                                    <p>Faith:           {weaponsDetail.req.faith}</p> 
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

export default WeaponsGuide;