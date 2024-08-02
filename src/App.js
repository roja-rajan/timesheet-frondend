// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container } from 'react-bootstrap';
import './App.css'; 
import SearchPage from "./components/SearchPage";
import Add from "./components/Add";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar bg="light" expand="lg">
          <Button variant="primary" onClick={toggleSidebar}>
            ☰
          </Button>
          {/* <Navbar.Brand href="/">My App</Navbar.Brand> */}
        </Navbar>

        <Sidebar visible={sidebarVisible} onClose={() => setSidebarVisible(false)} />

        <Container className={`content ${sidebarVisible ? 'shifted' : ''}`}>
          <Routes>
            <Route path="/add" element={<Add/>} />
            <Route path="/search" element={<SearchPage/>} />
            <Route path="/" exact element={<SearchPage/>} /> {/* Default to SearchPage */}
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
