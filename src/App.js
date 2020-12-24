import './App.css';
import Login from './components/login/Login'
import Register from './components/register/Register'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route  
      path='/login'
      component={Login}
      />
      
      <Route 
      path='/register'
      component={Register}
      />
    </div>
    </BrowserRouter>
  );
}

export default App;
