import React from 'react'
import './searchResult.scss'
import {Container, Card, Button} from 'react-bootstrap';

const Property = ({property}) =>{
    return (
        <div>
            <Card style={{display: 'flex'}}>
                <Card.Img className='' variant="top" src={property.coverPhoto.url} 
                style={{maxHeight:'200px'}}/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
        )
    }

const SearchResult = ({forRent, forSale}) => {

    return (
        <div className='searchResult'>
            <Container style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'5px'}}>
                {forRent.map((property, index) =>{
                    return (
                    
                                <div >
                                    <Property property={property}/>
                                </div>
    
                        )
                    })
                }
            </Container>
        </div>
    )
}

export default SearchResult
