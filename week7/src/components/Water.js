//Import React
import React, {Component} from 'react'


class Water extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oz: 0
        };
    };
    
    render() {
//Buttons to add or reset
        return(
            <div>
                <h2>Water Drank: {this.state.oz}</h2>
                <button class = "water" onClick = {() => this.setState({oz: this.state.oz + 2})}> Add 2 Ounces</button>
                <button class = "water" onClick = {() => this.setState({oz: 0})}> Reset </button>
            </div>
        );
    }
}
//export file
export default Water;
