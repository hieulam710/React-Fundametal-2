import React, { Component } from 'react';
import Dice from './Dice';

class RollDice extends Component {
    static defaultProps =
        { sides: ["one", 'two', 'three', 'four', 'five', 'six']}
    constructor(props) {
        super(props); 
        this.state = { dice1: "one", dice2: 'two' , roll: false ,
        animation : ""}
    }
    roll =()=> {
     
        const newDice1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length )]
        const newDice2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length )]
        this.setState({animation: "shaking" , roll: true })
        setTimeout(() => {
            this.setState({ dice1: newDice1, dice2: newDice2 })
            this.setState({roll:false, animation:""})
        },900)
    }

    render() {
        
        return (
            <div className='container'>
                <div className='diceBox'>
                <Dice  face={this.state.dice1} animation={this.state.animation} />
                <Dice face={this.state.dice2}  animation={this.state.animation}/>
                </div>
                <button onClick={this.roll} >{this.state.roll ? "Rolling..." : "Roll Dice"}</button>
            </div>
        );
    }
}

export default RollDice;