import React , { Component} from 'react';
import NotFound from './NotFound';
import { Container, Row, Col, Card , Table, Button } from 'react-bootstrap';
import Header from './Header';
class ProductDetails extends Component
{
    constructor()
    {
        super();
        this.state = {
            items : [],
            isLoaded : false,
            cartStatus : '',
            res : []
        }
        this.addToCart = this.addToCart.bind(this);
    }
    addToCart()
    {
        var token = sessionStorage.getItem('Token');
       
        
        if((token === null) || (token.length === 0)|| (token === 'null') || (token === undefined))
        {
            alert("Please Login with Authorized details");
        }
        else
        {
            fetch("http://laravel.local/api/add-to-cart",{
                method: 'POST',  
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : 'Bearer '+token
                },
                body : JSON.stringify(this.state.items),
            })
            .then(res => res.json())
            .then(json => {
                this.setState({
                    cartStatus : 'Successfully Added to Cart',
                    res : json
                })
            });
            console.log("State data in Product Detail Page:",this.state.items.id);
            alert("Successfully Added to your cart..");
        }
    }
    componentDidMount()
    {
        const url = this.props.location.search;
        const splittingArray = url.split("=");
        const q = splittingArray[1];
        console.log("Location URL :",window.location.href);
        fetch("http://laravel.local/api/product-details/"+q , {
            method: 'GET',  
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded : true,
                items : json,
            })
        });
    }
    render()
    {
        console.log("State Data:",this.state);
        var {isLoaded} = this.state;
        let cardStyle = {
            marginBottom : 10,
        };
        let amountStyle = {
            color:'green'
        };
        var dis = false , link_text = 'Add to Cart';
        if(sessionStorage.getItem('Token')===null)
        {
            console.log("Product Details Page");
            dis = true;
            link_text = 'Please Login to get this Item.';
        }
        if(!isLoaded)
        {
            return <div align="center"><h1>Please wait it's Loading...</h1></div>;
        }
        else
        {
            return (
                <div>
                    <Header />
                    {this.state.notFound && <NotFound />}
                   <Container style={{marginTop:10}}>
                       <Row>
                            <Col style={cardStyle} lg={6}>
                                <Card>
                                    <Card.Img variant="top" src={`/images/${this.state.items.logo}`} />
                                </Card>
                            </Col>
                            <Col lg={6}>
                                <Table bordered>
                                    <thead>
                                        <tr>
                                            <td align="center" colSpan ={2}>
                                                <h1 align="center" className="text text-success">
                                                    Product Details
                                                </h1>
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td align="right" width="50%">Product Name : </td>
                                            <td align="left"><h4>{this.state.items.title}</h4> </td>
                                        </tr>
                                        <tr>
                                            <td align="right">Product Description : </td>
                                            <td align="left"><h4>{this.state.items.description}</h4> </td>
                                        </tr>
                                        <tr>
                                            <td align="right">Product Amount : </td>
                                            <td align="left"><h4 style={amountStyle}>{this.state.items.price}</h4> </td>
                                        </tr>
                                        <tr>
                                            <td align="right">Product Quantity : </td>
                                            <td align="left"><h4>{this.state.items.quantity}</h4> </td>
                                        </tr>
                                        <tr>
                                            <td align="center" colSpan={2}>
                                                <Button variant="outline-success" onClick={this.addToCart} disabled={dis}>{link_text}</Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>                        
                       </Row>
                   </Container>
                </div>
            );
        }
    }
}
export default ProductDetails;