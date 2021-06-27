import React, { useState } from 'react';
import SelectUSState from 'react-select-us-states'

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from 'reactstrap';

function Profile() {
    const initialInfoState = {
        id: null,
        FullName: '',
        Address1: '',
        Address2: '',
        City:'',
        State:'',
        ZipCode:''
      };
      const [info, setInfo] = useState(initialInfoState);
    
      //we will use edit state to determine which button to show
      const [edit, setEdit] = useState(true);
    
      const handleSave = (e) => {
        e.preventDefault();
        saveInfo();
        //set edit to false when save is clicked
        setEdit(false);
      };
    
      const handleEdit = (e) => {
        e.preventDefault();
        //set edit to true when edit is clicked
        setEdit(true);
      };
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInfo({ ...info, [name]: value });
      };
    
      const saveInfo = () => {
        var data = {
            FullName: info.FullName,    
            Address1: info.Address1,
            Address2: info.Address2,
            City: info.City,
            State: info.State,
            ZipCode: info.State
        };
    
        console.log(info.FullName + " " +
                    info.Address1 + " " +
                    info.Address2 + " " +
                    info.City + " " +
                    info.State + " " +
                    info.ZipCode)
            
        
      };

    return (
        <div>
             <Container className="mt--7" fluid>
        <Row>
          {/* PRINCIPAL BODY */}

          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">User Profile</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    {edit === true ? (
                      <Button color="primary" onClick={handleSave} size="sm">
                        Save
                      </Button>
                    ) : (
                      <Button color="primary" onClick={handleEdit} size="sm">
                        Edit
                      </Button>
                    )}
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Full Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="FullName"
                            required
                            value={info.FullName}
                            onChange={handleInputChange}
                            type="text"
                            name="FullName"
                            placeholder="Full Name"
                            disabled={!edit}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="Address1"
                            required
                            value={info.Address1}
                            onChange={handleInputChange}
                            type="text"
                            name="Address1"
                            placeholder="Address line 1"
                            disabled={!edit}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="Address2"
                            required
                            value={info.Address2}
                            onChange={handleInputChange}
                            type="text"
                            name="Address2"
                            placeholder="Address line 2"
                            disabled={!edit}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            City
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="City"
                            required
                            value={info.City}
                            onChange={handleInputChange}
                            type="text"
                            name="City"
                            placeholder="City"
                            disabled={!edit}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <p>
                             Select a state: <SelectUSState 
                             id="myId" 
                             className="myClassName" 
                             onChange/>
                        </p>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            ZipCode
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="ZipCode"
                            required
                            value={info.ZipCode}
                            onChange={handleInputChange}
                            type="text"
                            name="ZipCode"
                            placeholder="ZipCode"
                            disabled={!edit}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
        </div>
    )
                    }

export default Profile