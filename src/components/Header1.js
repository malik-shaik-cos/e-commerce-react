import React, { Component } from 'react';
import { Button,Form, Container, Row , Col } from 'react-bootstrap';
class Header extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { 
            hint : '',
            items : [],
            itemsCount : 0,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event)
    {
        
        this.setState({ hint : event.target.value });
        // console.log(event.target.value);
    }
    handleSubmit(event)
    {
        console.log('Name : '+this.state.hint);
        if(this.state.hint.length < 3 )
        {
            alert("Please type atleast 3 characters...");
        }
        else
        {
            fetch("http://laravel.local/api/search/"+(this.state.hint) , {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json()).then(json => {
                this.setState({
                    items : json,
                    itemsCount:json.length,
                })
            });
            
            this.props.changeStatus();
            console.log("Size of Items is : ",this.state.items.length);
        }
        
        // console.log(this.props.data);
      
        event.preventDefault();
    }
    render()
    {
        let mystyle = {
            marginTop:10,
            marginBottom : 10,
            textAlign:'center'
        }
        var {items} = this.state;
        return <Container style={mystyle}>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col xl={9}>
                            <Form.Control type="text" value={this.state.value} placeholder="You are Searching For ?" onChange={this.handleChange} />
                        </Col>
                        <Col xl={3}>
                            <Button variant="success" type="submit">Search</Button>
                        </Col>
                    </Row>
                </Form>
                {/* <Row>
                    <Col>
                        <Form.Control type="text" value={this.state.value} placeholder="You are Searching For ?" onChange={this.handleChange} />
                    </Col>
                </Row> */}
                <Row>
                    <Col>
                        <ul>
                            {items.map(item => (
                                <li key={item.id}>{item.title}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>;       
        
    }
}
export default Header;