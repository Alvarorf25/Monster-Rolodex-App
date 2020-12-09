import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

//THIS IS A FUNCTIONAL COMPONENT --------- There are 2 way to create components: class components and functional components. One of the things about components is that they take in something called "props" and props is a parameter that we get from our functional component. in CardList props is "monsters= {this.state.monsters}"
export const CardList = props => (  
    <div className='card-list'>
        {props.monsters.map(monster => (<Card key={monster.id} monster={monster} />))} 
    </div>                                               //Apply the className= 'card-list' for all the children of CardList        
);                                