import { Routes, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Authentication from './pages/authentication/Authentication.jsx';
import Home from './pages/home/Home';
import Customer from './pages/customer/Customer.jsx';
import Client from './pages/client/Client.jsx';
import Admin from './pages/admin/Admin.jsx'
import LandingPage from './pages/home/LandingPage';
import MovieDetail from './pages/movie-detail/MovieDetail';
import SelectTheatre from './pages/select-theatre/SelectTheatre';
import SelectSeats from './pages/select-seats/SelectSeats';
import RequireAuth from './components/require-auth/RequireAuth';
import Unauthorised403 from './components/unauthorised/Unauthorised403';

function App() {

  return (
    <div className="App">

    <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path="/home" element={<Home/>}/>
        <Route path='/login' element={<Authentication />} />
        <Route path='/customer' element={<Customer />} />
        <Route path='/client' element={<Client />} />
        <Route path='/admin' element={<Admin />} />
       
        <Route path='/unauthorised' element={<Unauthorised403 />} />
        <Route
            path='/movie-detail/:movieId'
            element={<MovieDetail />}
        />
        <Route
            path='/buy-tickets/:movieName/:movieId'
            element={<SelectTheatre />}
        />

        <Route element={<RequireAuth allowedRoles={["CUSTOMER"]} />}>
            <Route
                path='/select-seats/:movieId/:theatreId'
                element={<SelectSeats />}
            />
        </Route>
    
    </Routes>
</div>



  );
}

export default App;
