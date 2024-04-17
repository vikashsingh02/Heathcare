import logo from './logo.svg';
import './App.css';
import Mainpage from './Components/Mainpage';
import Navbar from './Components/Navbar';
import Info from './Components/Info'
function App() {
  return (
   <div>
    <Navbar/>
    <Mainpage/>
    <Info/>
   </div>
  );
}

export default App;
