import React from 'react'
import './searchResult.scss'
import {Container, Row, Col} from 'react-bootstrap';


const Property = ({property}) =>{
    console.log(property)
    return (
        <Row>
            <Col>
            <img src={property.coverPhoto.url} className='img-thumbnail' alt='house'/>
            </Col>
        </Row>
    )
}

const SearchResult = ({forRent, forSale}) => {

    return (
        <div className='searchResult'>
            <Container>
                {forRent.map((property) =>{
                    return <Property property={property}/>
                })}
            </Container>
        </div>
    )
}

export default SearchResult
