import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./header.css";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
    <>
      <Navbar className='navbar'>
        <Container>
          <div className='navbar.brand'>
            <h1>INFOCCASE 3D</h1>
           </div>
          <Nav className="nav-item">
           <ul>
           <li>
            <Link to ="/">Accueil</Link>
            </li>
            <li>
            <Link to ="/contact">Contact</Link>
            </li>
            <li>
            <Link to ="/tarif">Tarif</Link>
            </li>
            <li>
            <Link to ="/projet">Projet</Link>
            </li>
            </ul>
          </Nav>
        </Container>
      </Navbar>
 </>
  );
}

export default Header;