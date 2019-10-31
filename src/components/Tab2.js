import React, { Component } from 'react';
class Tab2 extends Component
{
    constructor()
    {
        super();
        this.state = {
            results : '',
        };
    }
    componentDidMount()
    {
        const data = { "user_id": 5, "product_id": 3, "no_of_items": 1 };
        fetch('http://laravel.local/api/show',{
            method: 'POST',  
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data),
        })
        .then(res => res.json())
        .then(json => {
            this.setState({
                results : json,
            })
        });
    }
    render()
    {
        console.log("render");
        return(
            <div align="center">
               {this.state.results}
            </div>
        );
    }
}
export default Tab2;