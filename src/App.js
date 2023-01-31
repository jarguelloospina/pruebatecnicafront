
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from './components/layout/Navbar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Let's start the business app
        </p>
      </header>

      <Navbar/>
      <Button> Test button</Button>
    
    </div>
  );
}

export default App;
