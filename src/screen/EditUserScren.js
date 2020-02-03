import React, { Component } from 'react'
import { Container,Button,Label,Input, Row, Col, Media } from 'reactstrap';

 
import './EditUserScren.css';

class EditUserScren extends Component {


    state = {  }
    render() { 
        return ( 
            <Container>
            <Row>
                <Col xs="5"><Media  object data-src="holder.js/64x64" alt="Generic placeholder image" className='user_image' /></Col>
                <Col xs="7">UserName</Col>
            </Row>
            <Row>
                <Col xs="5"><Button color="primary">upload</Button>{' '}</Col>
                <Col xs="7"></Col>
            </Row>
            <Row>
                <Col xs="5"> <Input type="password" name="password" id="password" placeholder="password "/></Col>
                <Col xs="7"></Col>
            </Row>
            <Row>
                <Col xs="5"><Input type="password" name="password" id="repeatPassword" placeholder="Repeat password " /></Col>
                <Col xs="7"></Col>
            </Row>
            <Row>
                <Col xs="8"></Col>
                <Col xs="4"><Button color="primary">save</Button>{' '}</Col>
            </Row>

            {/*
            <Row>
           
        <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />

            </Row>
            <Row>
              <Col>.col</Col>
              <Col>.col</Col>
              <Col>.col</Col>
              <Col>.col</Col>
            </Row>
            <Row>
              <Col xs="3">.col-3</Col>
              <Col xs="auto">.col-auto - variable width content</Col>
              <Col xs="3">.col-3</Col>
            </Row>
            <Row>
              <Col xs="6">.col-6</Col>
              <Col xs="6">.col-6</Col>
            </Row>
            <Row>
              <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
              <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
              <Col sm="4">.col-sm-4</Col>
            </Row>
            <Row>
              <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .order-sm-2 .offset-sm-1</Col>
            </Row>
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
            </Row>
            <Row>
              <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
              <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
            </Row>
            */}
          </Container>
        );
    }
}
 
export default EditUserScren;