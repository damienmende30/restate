import React from 'react'
import './searchSection.scss'
import { useState } from 'react';
import { Container, Tab, Tabs, Form, Row, Col, Button } from 'react-bootstrap'
import {HiOutlineSearchCircle} from 'react-icons/hi'


const MyForm = () =>{
    return(
    <>
    <form>
        <Form.Group className="mb-3">
            <Row className='mb-2'>
                <Col>
                    <Form.Select>
                        <option placeholder='select price' selected disabled>Location</option>
                        <option placeholder='select price' >1,000 </option>
                        <option placeholder='select price'>2,000</option>
                        <option placeholder='select price' >3,000</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Select>
                        <option placeholder='select price' selected disabled>Home type</option>
                        <option placeholder='select price' >1,000</option>
                        <option placeholder='select price'>2,000</option>
                        <option placeholder='select price' >3,000</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Select>
                        <option placeholder='select price' selected disabled>Bedrooms</option>
                        <option placeholder='select price' >1,000</option>
                        <option placeholder='select price'>2,000</option>
                        <option placeholder='select price' >3,000</option>
                    </Form.Select>
                </Col>
            </Row>
            <Row className='mb-2'>
                <Col>
                    <Form.Select>
                        <option placeholder='select price' selected disabled>Bathrooms</option>
                        <option placeholder='select price' >1,000</option>
                        <option placeholder='select price'>2,000</option>
                        <option placeholder='select price' >3,000</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Select>
                        <option placeholder='select price' selected disabled>Min. Price</option>
                        <option placeholder='select price' >1,000</option>
                        <option placeholder='select price'>2,000</option>
                        <option placeholder='select price' >3,000</option>
                    </Form.Select>
                </Col>
                <Col>
                    <Form.Select>
                        <option placeholder='select price' selected disabled>Max. Price</option>
                        <option placeholder='select price' >1,000</option>
                        <option placeholder='select price'>2,000</option>
                        <option placeholder='select price' >3,000</option>
                    </Form.Select>
                </Col>
            </Row>
            <Button><HiOutlineSearchCircle style={{fontSize:'1.2rem', marginBottom: '2px', marginRight:'4px'}}/>Search</Button>
        </Form.Group>
    </form>
</>
    )
  }


const ForRent = () =>{
    return(
        <MyForm />
    )
}

const ForSale = () =>{
    return(
        <MyForm />
    )
}

function MyTabs() {
    const [key, setKey] = useState('rent');
  
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="rent" title="FOR RENT">
          <ForRent />
        </Tab>
        <Tab eventKey="sale" title="FORE SALE">
          <ForSale />
        </Tab>
      </Tabs>
    );
  }

const SearchSection = () => {
    return (
        <div className='search'>
            <Container>
                <h3>FIND YOUR DREAM HOME</h3>
                <div className='searchBox'>
                    <MyTabs />
                </div>
            </Container>
        </div>
    )
}

export default SearchSection
