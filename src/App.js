import { Routes, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Authentication from './pages/authentication/Authentication.jsx';
import Home from './pages/Landing/Home';
import Customer from './pages/customer/Customer.jsx';
import Client from './pages/client/Client.jsx';
import Admin from './pages/admin/Admin.jsx'


function App() {

  return (
    <div className="App">

    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Authentication />} />
        <Route path='/customer' element={<Customer />} />
        <Route path='/client' element={<Client />} />
        <Route path='/admin' element={<Admin />} />
    </Routes>
</div>



  );
}

export default App;
