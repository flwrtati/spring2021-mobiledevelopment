//import react 
import React, {Component} from 'react'

class Rest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        };
    };

    render() {
        //Buttons to add or reset
                return(
                    <div>
                        <h2>Rest Time: {this.state.time}</h2>
                        <button class = "rest" onClick = {() => this.setState({time: this.state.time + 1 })}> Add 1 Min</button>
                        <button class = "rest" onClick = {() => this.setState({time: 0})}> Reset </button>
                    </div>
                );
            }
        }
        //export file
        export default Rest;