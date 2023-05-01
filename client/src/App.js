import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import './App.css';

function App() {
  const [objectR, setObjectR] = useState({});
  const [arrayR, setArrayR] = useState({});
  const [objectArrayR, setObjectArrayR] = useState({});

  useEffect(() => {
    const fetchObjectR = async () => {
      const response = await fetch('/object');
      const data = await response.json();
      setObjectR(data);
    };
    const fetchArrayR = async () => {
      const response = await fetch('/array');
      const data = await response.json();
      setArrayR(data);
    };
    const fetchObjectArrayR = async () => {
      const response = await fetch('/object-array');
      const data = await response.json();
      setObjectArrayR(data);
    };

    fetchObjectR();
    fetchArrayR();
    fetchObjectArrayR();
  }, []);

  return (
    <div className="App">
      <Container>
        <Row>
          <div class="mt-4 p-5 bg-primary text-white"><h1>API Example calls</h1></div>
        </Row>
        <Row>
          <Col>
            <Tabs
              defaultActiveKey="object"
              id="fill-tab-example"
              className="mb-3 mt-3 justify-content-center"
              >
              <Tab eventKey="object" title="Form Example">
                <Form.Group className="mb-3">
                  <Form.Label>Title</Form.Label>
                  <Form.Control value={objectR.title} disabled />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control value={objectR.description} disabled />
                </Form.Group>

                <div className="mb-3">
                  <label class="form-label">Tags</label>
                  <ul>
                    {(Array.isArray(objectR.tags)) && objectR.tags.map((item, index) => (
                      <li key={index} >{item}</li>
                    ))}
                  </ul>
                </div>
                <hr />
                <small>Object: <pre>{JSON.stringify(objectR)}</pre></small>
              </Tab>
              <Tab eventKey="array" title="List">
                <div className="mb-3">
                  <label class="form-label">List</label>
                  <ul>
                    {(Array.isArray(arrayR)) && arrayR.map((item, index) => (
                      <li key={index} >{item}</li>
                    ))}
                  </ul>
                </div>
                <hr />
                <small>Array: <pre>{JSON.stringify(arrayR)}</pre></small>
              </Tab>
              <Tab eventKey="object-array" title="Table">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Tags</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(Array.isArray(objectArrayR)) && objectArrayR.map((item, index) => (
                      <tr key={index} >
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>
                          {(Array.isArray(item.tags)) && item.tags.map((item, index) => (
                            <span key={index} >{item}, </span>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>

                <hr />
                <small>Object array: <pre>{JSON.stringify(objectArrayR)}</pre></small>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default App;

