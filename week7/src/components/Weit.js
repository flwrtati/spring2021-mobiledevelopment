//import React
import React, {useState} from 'react';


//funcition for Weight Minutes
function Weit () {
    const [days2, setDays2] = useState(0);
//Buttons to add or reset
    return (
        <div>
            <h2>Weight Minutes: {days2}</h2>
            <button class = "button" onClick = {() => setDays2(days2 + 5 )}> Add 5 Min</button>
            <button class = "button" onClick = {() => setDays2(0)}> Reset </button>
        </div>
    )
}
//export file
export default Weit