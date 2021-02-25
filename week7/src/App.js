//import both files with functions
import Cardio from './components/Cardio'
import Weit from './components/Weit'

//call in file
function App() {
  return (
    <div>
      <h1>Daily Exercise Tracker</h1>
      <Cardio/>
      <Weit/>
    
    </div>
  );
}
//export file
export default App;
