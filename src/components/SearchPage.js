import React, { useState } from "react";
// import axios from "axios";
import { Form, Button, Table, Row, Col, Container, Alert } from 'react-bootstrap';
import { searchData } from "../services/apiService";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  // 
  // const handleSearch = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post(`https://b089-2403-a080-c04-620b-4d45-a5c4-77cb-251e.ngrok-free.app/search?tools=${query}`);
  //     setResults(response.data);
  //   } catch (error) {
  //     console.error("Error fetching search results:", error);
  //   }
  // };


// Handler for search
  const handleSearch = async (event) => {
    event.preventDefault();
    console.log("Search initiated with query:", query);
  
  //   try {
  //     // Fetch data using the query
  //     const response = await searchData(query);
  //     console.log("Raw response from searchData:", response);
      
  //     // Access the data property which contains the array of results
  //   const results = response.data;

  //     if (Array.isArray(results)) {
  //       setResults(results); // Set results to state if the response is an array
  //       console.log("Search results set to state:", results);
  //       setError('');
  //     } else {
  //       console.error("Unexpected response format:", results);
  //       setError("Unexpected data format received from the server.");
  //       setResults([]);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching search results:", error);
  //     setError("An error occurred while fetching data. Please try again.");
  //     setResults([]);
  //   }
  // };
  
  // Check if query is empty
  if (!query.trim()) {
    setError('No tool entered.');
    setResults([]);
    return;
  }

  try {
    // Fetch data using the query
    const response = await searchData(query);
    console.log("Raw response from searchData:", response);

    // Access the data property which contains the array of results
    const results = response.data;

    if (Array.isArray(results)) {
      if (results.length > 0) {
        setResults(results); // Set results to state if the response is an array
        console.log("Search results set to state:", results);
        setError('');
      } else {
        setError('No results found.');
        setResults([]);
      }
    } else {
      console.error("Unexpected response format:", results);
      setError("Unexpected data format received from the server.");
      setResults([]);
    }
  } catch (error) {
    console.error("Error fetching search results:", error);
    setError("An error occurred while fetching data. Please try again.");
    setResults([]);
  }
};
  
  

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={results.length > 0 ? 8 : 6}>
          <Form onSubmit={handleSearch}>
            <Form.Control
              type="text"
              placeholder="Search by  tool..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button type="submit" variant="primary" className="mt-2">Search</Button>
          </Form>
        </Col>
      </Row>

      {/* error */}
      {error && (
        <Row className="justify-content-center mt-3">
          <Col md={8}>
            <Alert variant="danger">{error}</Alert>
          </Col>
        </Row>
      )}
      {/* ---------------------------------------- */}

      {Array.isArray(results) && results.length > 0 && (
        <Row className="justify-content-center mt-5">
          <Col md={10}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>EID</th>
                  <th>Name</th>
                  <th>Tools Learned</th>
                  <th>Project</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result) => (
                  <tr key={result.id}>
                    <td>{result.id}</td>
                    <td>{result.name}</td>
                    <td>{result.tools}</td>
                    <td>{result.project}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default SearchPage;
