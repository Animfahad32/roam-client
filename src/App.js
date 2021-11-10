import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AddService from './components/AddService/AddService';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import MyOrders from './components/MyOrders/MyOrders';
import NotFound from './components/NotFound/NotFound';
import Tour from './components/Tour/Tour';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
        <AuthProvider>
        <Router>
          <Header></Header>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route exact path="/home">
                    <Home></Home>
                </Route>
                <PrivateRoute exact path="/tour/:serviceId">
                    <Tour></Tour>
                </PrivateRoute>
                <PrivateRoute exact path="/addservice">
                    <AddService></AddService>
                </PrivateRoute>
                <PrivateRoute exact path="/manageallorders">
                    <ManageAllOrders></ManageAllOrders>
                </PrivateRoute>
                <PrivateRoute exact path="/myorders">
                    <MyOrders></MyOrders>
                </PrivateRoute>
                <Route exact path="/login">
                    <Login></Login>
                </Route>
                <Route exact path="*">
                    <NotFound></NotFound>
                </Route>
                
            </Switch>
            <Footer></Footer>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
