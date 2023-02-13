
// import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';

import Register from './Register/Register';
import Login from './Login/Login';
// import Home from './Home/Home';
import './App.css';


function App() {
  return (
    <div className="App">
     {/* <Home/> */}
     <Register/>
     <Login/>
    </div>
  );
}

export default App;
