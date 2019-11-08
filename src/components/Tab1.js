import React, { Component } from 'react';
// import queryString from 'query-string';

class Tab1 extends Component
{
    constructor()
    {
        super();
        this.state = {
            results : '',
        }
        this.getData = this.getData.bind(this);
    }
    componentDidMount()
    {
        this.getData();
       
    }
    async getData()
    {
        const url = "https://api.myjson.com/bins/13bf1g";
       const response = await fetch(url,{headers : {
           'Content-type' : 'application/json'
       }});
       const data = await response.json();
       this.setState({results:data});
       console.log(this.state.results);
    }
    render()
    {
        return(
            <div align="center">
                
            </div>
        );
    }
}
export default Tab1;