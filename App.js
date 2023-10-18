import logo from './logo.svg';
import './App.css';
import LoginPage from './Components/Loginpage';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/Homepage';
import Cart from './Components/Cart';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      
    <Routes>
     <Route path='/' element={<LoginPage />} />
     <Route path='/homePage' element={<HomePage />} />
     <Route path='/cart' element={<Cart />} />
    </Routes>
    </div>
    
    </Provider>
  );
}

export default App;
