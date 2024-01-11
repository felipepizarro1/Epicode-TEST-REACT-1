import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BiSearch, BiBellPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom'; 
import '../App.css';

export default function NavbarComponent() {
  return (
    <header>
      <Navbar expand="lg" bg="black" className="px-4">
        <div className="container-fluid">
          <Navbar.Brand href="#">
            <img src="assets/netflix_logo.png" alt="" width="100px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Item>
                <Link to="#" className="nav-link text-white" aria-current="page">
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="#" className="nav-link text-white">
                  TV Shows
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="#" className="nav-link text-white">
                  Movies
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="#" className="nav-link text-white">
                  Recently Added
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="#" className="nav-link text-white">
                  My List
                </Link>
              </Nav.Item>
            </Nav>
            <div className="d-flex">
              <BiSearch className="text-white px-2" />
              <h2 className="text-white fs-5 px-2">KIDS</h2>
              <BiBellPlus className="text-white px-2 mr-5" />
              <div className="px-2">
                <Link to="/profile">
                  <img src="assets/avatar.png" alt="" width="30px" />
                </Link>
              </div>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  )
}
