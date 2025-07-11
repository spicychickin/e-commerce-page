import './App.css';
import Navbar from './components/navbar.jsx';
import CartDropdown from './components/CartDropdown.jsx';
import ProductInfo from './components/ProductInfo.jsx';
import ProductLightBox from './components/ProductLightBox.jsx';

function App() {
  return (
    <div className="App max-w-[1300px] mx-auto px-6">
      <Navbar />
      <CartDropdown />
      <ProductInfo />
      <ProductLightBox />
    </div>
  );
}

export default App;
