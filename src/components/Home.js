import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Container,Row,Col,Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Header from './Header';
// import {Route , Switch } from 'react-router-dom';
// import Tab1 from './Tab1';
class Home extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            hint : '',
            items : [],
            itemsCount : 0,
            redirect : false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount()
    {
        fetch("http://laravel.local/api/products",{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(json => {
            this.setState({
                items : json,
            })
        });
    }
    handleChange(event)
    {
        this.setState({ hint : event.target.value });
        // ,() => console.log("Data ",this.state.hint)
        // if(Object.keys(this.state.hint).length > 3)
        // {
        //     alert("Yes 3 caharcters...");
        // }        
        // console.log(event.target.value);
    }
    handleSubmit(event)
    {
        event.preventDefault();        
        if(this.state.hint.length < 3)
        {
            alert("Please type atleast 3 characters...");
        }
        else
        {
            this.setState({
                redirect : true
            });
        }
    }
    render()
    {
        if(this.state.redirect)
        {
           return <Redirect to='/Tab1' data = {{
               id:123,
           }}/>
        }
        // let mystyle = {
        //     marginTop:10,
        //     marginBottom : 10,
        //     textAlign:'center'
        // }
        let cardStyle = {
            marginBottom : 10,
        };
        let amountStyle = {
            color:'green'
        };
        return(
            
            <div className="products-wrapper">
                {/* <Container style={mystyle}>
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
                </Container> */}
                <Header />
                <Container style={{marginTop:10}}>
                    <Row>
                        {this.state.items.map(item => (                            
                            <Col style={cardStyle} lg={3} key={item.id}>
                                <Link to={`/product?id=${item.id}`}>
                                    <Card>
                                        <Card.Img variant="top" src={`/images/${item.logo }`} />
                                        <Card.Body>
                                            <Card.Title><b>{item.title}</b></Card.Title>
                                            <Card.Text>
                                                <b>₹ : <span style = {amountStyle}>{item.price }</span></b>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>                            
                        ))}
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Home;