//Import React
import React, {Component} from 'react'


class Cardio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days1: 0
        };
    };
    
    render() {
//Buttons to add or reset
        return(
            <div>
                <h2>Cardio Minutes: {this.state.days1}</h2>
                <button onClick = {() => this.setState({days1: this.state.days1 + 5})}> Add 5 Min</button>
                <button onClick = {() => this.setState({days1: 0})}> Reset </button>
            </div>
        );
    }
}
//export file
export default Cardio;
