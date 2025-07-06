import './App.css';
import Navbar from './components/navbar.jsx';
import CartDropdown from './components/CartDropdown.jsx';

function App() {
  return (
    <div className="App max-w-[1100px] mx-auto px-6">
      <Navbar />
      <CartDropdown />
    </div>
  );
}

export default App;
