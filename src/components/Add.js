import React, { useState } from "react";
import { Form, Button, Card, Row, Col, Alert } from "react-bootstrap";
// import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import "./Add.css";
import { addData } from "../services/apiService";

const Add = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [tools, setTools] = useState("");
  const [project, setProject] = useState("");
  const [error, setError] = useState("");

  // Handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form fields
    if (!id || !name || !tools || !project) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await addData({ id, name, tools, project });
      console.log("Data submitted successfully:", response);
      // Optionally clear the form
      setId("");
      setName("");
      setTools("");
      setProject("");
      setError(""); // Clear error message if submission is successful
    } catch (error) {
      console.error("There was an error submitting the data:", error);
      setError("There was an error submitting the data. Please try again.");
    }
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       'https://b089-2403-a080-c04-620b-4d45-a5c4-77cb-251e.ngrok-free.app/submit',
  //       { id, name, tools, project },
  //       {
  //         headers: {
  //           'Authorization': 'Bearer YOUR_API_TOKEN', // or any other necessary headers
  //           'Content-Type': 'application/json'
  //         }
  //       }
  //     );
  //     // const response = await addData({ id, name, tools, project });
  //     console.log('Data submitted successfully:', response.data);
  //     // Optionally clear the form
  //     setId('');
  //     setName('');
  //     setTools('');
  //     setProject('');
  //   } catch (error) {
  //     console.error('There was an error submitting the data:', error);
  //   }
  // };

  return (
    <Row className="justify-content-center">
      <Col md={6}>
        <Card style={{ marginTop: "85px", height: "30rem", width: "38rem" }}>
          <Card.Body>
            <Card.Title>
              <h1>Add New Tools</h1>
            </Card.Title>

            {error && (
                <Alert variant="danger" className="mt-3">
                  {error}
                </Alert>
              )}
              
            <Form onSubmit={handleSubmit}>
              <Form.Group
                as={Row}
                controlId="eid"
                style={{ marginTop: "30px" }}
              >
                <Form.Label column sm={4}>
                  EID:
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                controlId="name"
                style={{ marginTop: "30px" }}
              >
                <Form.Label column sm={4}>
                  Name:
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                controlId="tools"
                style={{ marginTop: "30px" }}
              >
                <Form.Label column sm={4}>
                  Tool Learned:
                </Form.Label>
                <Col sm={8}>
                  <div className="input-icon">
                    <Form.Control
                      type="text"
                      value={tools}
                      onChange={(e) => setTools(e.target.value)}
                      required
                    />
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="input-icon-symbol"
                    />
                  </div>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                controlId="project"
                style={{ marginTop: "30px" }}
              >
                <Form.Label column sm={4}>
                  Project:
                </Form.Label>
                <Col sm={8}>
                  <div className="input-icon">
                    <Form.Control
                      type="text"
                      value={project}
                      onChange={(e) => setProject(e.target.value)}
                    />
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="input-icon-symbol"
                    />
                  </div>
                </Col>
              </Form.Group>

              <Button type="submit" variant="success" className="mt-3">
                Add
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Add;
