import React, { Component } from 'react';
import { Button,Form, Container, Row , Col } from 'react-bootstrap';
import { Link} from "react-router-dom";
class Header extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { 
            hint : '',
            enableProductsList : true,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.clickMe  = this.clickMe.bind(this);
    }
    handleChange(event)
    {
        this.setState({ hint : event.target.value });
       
    }
   
    handleSubmit(event)
    {
        event.preventDefault();
        console.log('Name : '+this.state.hint);
        if(this.state.hint.length < 3 )
        {
            alert("Please type atleast 3 characters...");
        }
        // else
        // {
        //     fetch("http://laravel.local/api/search/"+(this.state.hint) , {
        //         method: 'GET',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     }).then(res => res.json()).then(json => {
        //         this.setState({
        //             items : json,
        //             itemsCount:json.length,
        //         } , () => console.log('Items Count is :',this.state.itemsCount))
        //     });
        // }
        // if(this.state.itemsCount > 0)
        // {
        //     console.log("I am in items count.. Greater Than Zero..");
        // }
        // else{
        //     console.log("I am malik");
        // }
        
        // console.log(this.props.data);
      
        
    }
    render()
    {
        let mystyle = {
            marginTop:10,
            marginBottom : 10,
            textAlign:'center'
        }
        // let itemsCount = this.state.itemsCount
        // var {items} = this.state;
        return <Container style={mystyle}>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col xl={9}>
                            <Form.Control type="text" value={this.state.value} placeholder = " Please type atleast 3 characters to enable search buttom " onChange={this.handleChange} />
                        </Col>
                        <Col xl={3}>
                        <Link to={`/search?q=${this.state.hint}`}> 
                                <Button variant="success" type="submit">Search</Button>
                            </Link>
                        </Col>
                    </Row>
                </Form>
                {/* <Row>
                    <Col>
                        <Form.Control type="text" value={this.state.value} placeholder="You are Searching For ?" onChange={this.handleChange} />
                    </Col>
                </Row> */}
                {/* <Row>
                    <Col>
                        <ul>
                            {items.map(item => (
                                <li key={item.id}>{item.title}</li>
                            ))}
                        </ul>
                    </Col>
                </Row> */}
            </Container>;       
        
    }
}
export default Header;