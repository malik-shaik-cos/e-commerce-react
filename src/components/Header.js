import React, { Component } from 'react';
import { Button,Form, Container, Row , Col } from 'react-bootstrap';
import { Link} from "react-router-dom";
import AuthModal from './AuthModal';
class Header extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { 
            hint : '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.log = this.logout.bind(this);
    }
    handleChange(event)
    {
        this.setState({ hint : event.target.value });
       
    }
    componentDidMount()
    {
        if(sessionStorage.getItem('Token'))
        {
            var name = sessionStorage.getItem('Token');
            // console.log("Session Data ",name);
        }
        else
        {
            console.log("Session Destroy");
        }
    }
    handleSubmit(event)
    {
        event.preventDefault();
        console.log('Name : '+this.state.hint);
        if(this.state.hint.length < 3 )
        {
            alert("Please type atleast 3 characters...");
        }    
        
    }
    logout()
    {
        if(sessionStorage.getItem('Token')!==null)
        {
            if(window.confirm("Are you sure want to Log out ?"))
            {
                console.log("Successfully Log out..........");
                sessionStorage.clear();
                localStorage.clear();
                // alert("Successfully Log out..........");
                window.location.reload(false);
            }
            else
            {
                console.log("Thank You Keep Shopping");
            }
        }        
    }
    // componentWillUpdate()
    // {
    //     var token = sessionStorage.getItem("Token");
    //     if((token.length !== 0) && (token !== "") && (token !== null))
    //     {
    //         this.setState({loginStatus:true});
    //     }
    //     else
    //     {
    //         console.log("You logged Out.");
    //     }
    // }
    render()
    {
        let mystyle = {
            marginTop:10,
            marginBottom : 15,
            textAlign:'center',
            padding : 0
        }
        // console.log("Header State : ",this.state);
        var token = sessionStorage.getItem("Token");
        var data_target = '', data_toggle = '', text = '',c_name = '';
        if((token === null) || (token === "") || (token.length === 0) )
        {
            text = 'Login';
            data_target = '#myModal';
            data_toggle = 'modal';
            c_name = 'btn btn-primary';
            console.log("You logged Out.");
            // btn = '<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Login</button>';
        }
        else
        {
            console.log("You are Logged in Already...");
            text = 'Log out';
            data_target = '';
            data_toggle = '';
            c_name = 'btn btn-outline-primary';
            // btn = '<button type="button" className="btn btn-primary" disabled="true">Log out</button>';
            
        }
        return <Container style={mystyle}>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col xl={2}>
                            <Link to="/"> 
                                <Button variant="info" type="submit">Home</Button>
                            </Link>
                        </Col>
                        <Col xl={6}>
                            <Form.Control type="text" value={this.state.value} placeholder = " Please type atleast 3 characters to enable search buttom " onChange={this.handleChange} />
                        </Col>
                        <Col xl={2}>
                            <Link to={`/search?q=${this.state.hint}`}> 
                                <Button variant="success" type="submit">Search</Button>
                            </Link>
                        </Col>
                        <Col xl={2}>
                            <button type="button" onClick={this.logout} className={c_name} data-toggle={data_toggle} data-target={data_target} >{text}</button>
                        </Col>
                    </Row>
                </Form>
                <AuthModal />
            </Container>;       
        
    }
}
export default Header;