import React, { Component } from 'react';
import Header from './components/Header';
import Media from 'react-bootstrap/Media';
class CartDetails extends Component
{
    constructor()
    {
        super();
        this.state = {
            items : [],
            results : [],
            itemIds : [],
            quantity : '12S',
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.reloadPage = this.reloadPage.bind(this);
        this.updateCart = this.updateCart.bind(this);
    }
    componentDidMount()
    {
        var token = sessionStorage.getItem('Token');
        // console.log("Check TOken",token);
        if((token === null) || (token.length === 0)|| (token === 'null') || (token === undefined))
        {
            // alert("Please Login with Authorized details");
            return(
                <div className="container">

                </div>
            );
        }
        else
        {
            fetch("http://laravel.local/api/cart-details",{
                method: 'GET',  
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : 'Bearer '+token
                }
            })
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items : json
                })
            });
            console.log("State data in Product Detail Page:",this.state.items);
        }
    }
    reloadPage()
    {
        console.log("I am coming upton reload Function........")
        // window.location.reload(false);
    }
    updateCart(e)
    {
        // console.log(id);
        this.setState({ quantity : e.target.value } );
        console.log(this.state.quantity);
    }
    deleteItem(itemId)
    {
        var token = sessionStorage.getItem('Token');
        if(window.confirm("Are you sure want to delete this Item .?"))
        {
            console.log(itemId);
            var data = {
                cart_id : itemId
            };
            fetch('http://laravel.local/api/cart-delete',{
                method: 'POST',  
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : 'Bearer '+token
                },
                body : JSON.stringify(data),
            })
            .then(res => res.json())
            .then(json => {
                this.setState({
                    results : json,
                }) ;
               this.componentDidMount();
            });

        }
    }
    render()
    {
        var items = this.state.items;
        console.log("FInal Data:",this.state.quantity);
        var amount = 0 , GREY = '#cccccc';
        var extraCSS = {
            marginTop : 10 ,
            padding : 3,
            boxShadow: `0px 0px 2px 2px ${GREY}`,
        };
        
        for(var index in items)
        {
            amount = amount + parseFloat(items[index].product_price);
        }
        return(
            <div className="cart-wrapper">
                <Header/>
                <div className="container">
                    <dt><h2><mark>My Shopping Cart :</mark></h2></dt>
                    <ul className="list-unstyled">
                        {items.map(item => (
                            <Media as="li" className="cart-list-item" key={item.id} style={extraCSS}>
                                {/* <Link to={`/product?id=${item.id}`}> */}
                                    <img width={64} height={64} className="mr-3" style={{marginTop:20}} src={`/images/${item.product_logo }`} alt="File of Your Selected Item!" />
                                {/* </Link> */}
                                <Media.Body>
                                    <div className="row" style={{marginTop:20}}>
                                         <div className="col-md-2">
                                            <p>
                                                <dt>Product Name : </dt>
                                                <dd>{item.product_title}</dd>
                                            </p>
                                         </div>
                                         <div className="col-md-4">
                                            <p>
                                                <dt>Description : </dt>
                                                <dd>{item.product_description}</dd>
                                            </p>
                                         </div>
                                         <div className="col-md-2">
                                            <p>
                                                <dt>Amount : </dt>
                                                <dd>{item.product_price}</dd>
                                            </p>
                                         </div>
                                         <div className="col-md-2">
                                            <p>
                                                <dt>Quantity : [ {item.no_of_items} ]</dt>
                                                <dd><input type="number"  onChange={this.updateCart} placeholder="  Update" className="form-control" data-name={item.id}  min={1}/></dd>
                                            </p>
                                         </div>
                                         <div className="col-md-2" align="center">
                                            <button type="button" onClick={() => this.deleteItem(item.id)} className="btn btn-danger btn-sm deleteItem" data-name={`${item.id}`}>Delete</button>
                                         </div>
                                    </div>
                                </Media.Body>
                            </Media>
                        ))}
                        
                    </ul>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-4" align="right">
                            <h1>Total : </h1>
                        </div>
                        <div className="col-md-2" align="center">
                            <h1 className="text text-success">{amount}</h1>
                        </div>
                        <div className="col-md-4" align="center">
                            <button className="btn btn-secondary">Proceed</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CartDetails;
