// Sidebar.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ visible, onClose }) => {
  return (
    <div className={`sidebar ${visible ? 'active' : ''}`}>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/add" onClick={onClose}>Add</Nav.Link>
        <Nav.Link as={Link} to="/search" onClick={onClose}>Search</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
