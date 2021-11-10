import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth()
    return (
        <>
        <Navbar collapseOnSelect expand="lg" variant="light" bg="light" sticky="top" className="nav">
        <Container>
           <Navbar.Brand className="brand-text span-bg">
               Roam
           </Navbar.Brand>
           <Navbar.Toggle/>
           <Navbar.Collapse className="justify-content-end">
               
               <Nav.Link as={HashLink} to="/home" className="text-dark nav-hov">Home</Nav.Link>
               <Nav.Link as={HashLink} to="/home#tours" className="text-dark nav-hov">Tours</Nav.Link>
              
              
               {user?.email ?
                    
                    <div className="header-div">
                         <Nav.Link as={HashLink} to="/manageallorders" className="text-dark nav-hov">Manage All Orders</Nav.Link>
                        <Nav.Link as={Link} to="/addservice" className="text-dark nav-hov">Add A Service</Nav.Link>
                        <Nav.Link as={HashLink} to="/myorders" className="text-dark nav-hov">My Orders</Nav.Link>
                    <button onClick={logOut} className="btn-style">Log out </button> 
                    </div>
                    :
                    <div>
                        <Nav.Link as={HashLink} to="/login" className="btn-style">Login </Nav.Link>
                    </div>
                   
                   
                   
            
               }
            
                {user?.email && 
                     <Navbar.Text className="ms-2"> 
                          Signed in as: <a href="#login">{user?.displayName}</a>
                         </Navbar.Text>  
               }
           
           </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    );
};

export default Header;