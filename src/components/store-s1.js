import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Card from "../../node_modules/react-bootstrap/Card";
import Form from "../../node_modules/react-bootstrap/Form";
import Button from "../../node_modules/react-bootstrap/Button";

class StoreS1 extends Component{
    render(){
        return(    
            <Container fluid className="store-s1 d-flex minh-100vh align-items-start py-5">
                <Row className="mx-0 w-100 mt-5">
                    <Col xs={12} sm={5} md={4} lg={3} className="pt-5">
                        <Card className="opacity-8 bg-danger border-dark">
                            <Card.Header className="bg-danger">
                                <Card.Title className="text-dark float-start">
                                    Filter
                                </Card.Title>   
                                <Button variant="outline-dark" size="sm" className="float-end rounded" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#filters">
                                    +
                                </Button>                         
                            </Card.Header>
                            <Card.Body className="collapse show" id="filters">
                                <Form className="small">
                                    <fieldset className="mb-3">
                                        <legend>
                                            <Card.Subtitle>
                                                Categories
                                            </Card.Subtitle>
                                        </legend>                                    
                                        <Form.Check className="ms-2"
                                            type="checkbox"
                                            label="Item"/>                        
                                        <Form.Check className="ms-2"
                                            type="checkbox"
                                            label="Item"/>                  
                                        <Form.Check className="ms-2"
                                            type="checkbox"
                                            label="Item"/>                                                    
                                    </fieldset>
                                    <fieldset className="mb-5 w-100">
                                        <legend>
                                            <Card.Subtitle>
                                                Subcategories
                                            </Card.Subtitle>
                                        </legend>                   
                                        <Form.Check className="ms-2"
                                            type="checkbox"
                                            label="Item"/>      
                                        <Form.Check className="ms-2"
                                            type="checkbox"
                                            label="Item"/>     
                                        <Form.Check className="ms-2"
                                            type="checkbox"
                                            label="Item"/>
                                        <Form.Check className="ms-2"
                                            type="checkbox"
                                            label="Item"/>
                                        <Form.Check className="ms-2"
                                            type="checkbox"
                                            label="Item"/>
                                        <Form.Check className="ms-2"
                                            type="checkbox"
                                            label="Item"/>
                                        <Form.Check className="ms-2"
                                            type="checkbox"
                                            label="Item"/>
                                        <Form.Check className="ms-2"
                                            type="checkbox"
                                            label="Item"/>
                                        <Form.Check className="ms-2"
                                            type="checkbox"
                                            label="Item"/>
                                    </fieldset>
                                    <div className="w-100 text-end border-top border-dark pt-2">
                                        <Button type="reset" variant="dark" size="sm" className="rounded-pill me-2">
                                            Clear
                                        </Button>
                                        <Button type="submit" variant="dark" size="sm" className="rounded-pill">
                                            Filter
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={7} md={8} lg={9}>

                    </Col>
                </Row>
            </Container>
        );
    }
}

export default StoreS1;