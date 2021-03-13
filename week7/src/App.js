//import both files with functions
import Cardio from './components/Cardio';
import Weit from './components/Weit';
import Rest from './components/Rest';
import Water from './components/Water';
import './App.css';


//call in file
function App() {
  return (
      <body>
      <header>
        <nav>
          <ul>
            <li><a href ="Home">Home</a></li>
            <li><a href ="Home">Daily Tracker</a></li>
            <li><a href ="Home">Progress</a></li>
            <li><a href ="Home">Settings</a></li>
          </ul>
        </nav>
      </header>
      <div>
      <h1>Daily Exercise Tracker</h1>
      <Cardio/>
      <Weit/>
      <Rest/>
      <Water/>
     
    
    </div>
    </body>
  );
}
//export file
export default App;
