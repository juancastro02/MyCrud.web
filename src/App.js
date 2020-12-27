import './App.css';
import Login from './components/login/Login'
import Register from './components/register/Register'
import Navbar from './components/navbar/navbar'
import ForgotPass from './components/forgotPass/Forgot'
import Reset from './components/resetPass/Reset'
import CreateProduct from './components/admin/createProduct/create'
import UpdateProduct from './components/admin/updateProduct/update'
import DeleteProduct from './components/admin/deleteProduct/delete'
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

      <Route 
      path='/forgot'
      component={ForgotPass}
      />

      <Route 
      exact path='/reset/:id'
      render={({match}) => <Reset id={match.params.id}/>}
      />

      <Route 
       exact path ='/'
       component={CreateProduct}
      /> 

      <Route 
      exact path = '/update'
      component={UpdateProduct}
      />

      <Route 
      exact path='/delete'
      component= { DeleteProduct }
      />

    </div>
    </BrowserRouter>
    </DataProvider>
  );
}

export default App;
