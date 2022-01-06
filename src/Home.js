import React from "react";
// import { NavLink } from "react-router-dom";
import "./home.css";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";


export default function Home() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <div class="customnavbar">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">OnPay</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/dashboard/Dashboard">Dashboard</Nav.Link>
                  <Nav.Link href="/emp">Employee</Nav.Link>
                  <Nav.Link href="/signup">Sign Up</Nav.Link>
                  <Nav.Link href="/signin">Sign In</Nav.Link>
                  <Nav.Link href="/addForm">Add Form</Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <h2>Employee Management System</h2>
        <p>Onpay is simply an application that helps companies with numerous or few number of employees to store and manage their database. 
         We just call ourselves as a helping hand to the companies that have a great future ahead.  
        </p>
        <p2>Welcome to creating your own database.</p2>

      </div>
    </>
  );
}
