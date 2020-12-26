import './App.css';
import Login from './components/login/Login'
import Register from './components/register/Register'
import Navbar from './components/navbar/navbar'
import { DataProvider } from './context/DataContext'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <DataProvider>
    <BrowserRouter>
    <div className="App">

      <Route 
      path='/'
      component={Navbar}
      />

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
    </DataProvider>
  );
}

export default App;
