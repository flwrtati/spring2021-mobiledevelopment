//import React
import React, {useState} from 'react';

//funcition for Weight Minutes
function Weit () {
    const [days, setDays] = useState(0);
//Buttons to add or reset
    return (
        <div>
            <h2>Weight Minutes: {days}</h2>
            <button onClick = {() => setDays(days + 5 )}> Add 5 Minutes</button>
            <button onClick = {() => setDays(0)}> Reset </button>
        </div>
    )
}
//export file
export default Weit