import React from 'react';
import { Button, Form, Container, Col } from 'react-bootstrap';

export default function Search(props) {

const [search,setSearch] = React.useState('');

    return(
        <Container>
            <Form className ="mt-2"> 
            <Form.Row className="align-items-center">
                <Col med={10} className="my-1">
                    <Form.Control onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search for Pokemon"> 
                    </Form.Control>
                </Col>
                <Col med={2} className="my-1">
                    <Button onClick={(e)=> props.getPokemon(search)} >  Search
                    </Button>
                </Col>
            </Form.Row>
            </Form> 
        </Container>
    )
}