import React, { Component } from 'react';
// import queryString from 'query-string';

class Tab1 extends Component
{
    constructor()
    {
        super();
        this.state = {
            hint : '',
        }
    }
    componentDidMount()
    {
        const qs = new URLSearchParams(this.props.location.search);
        const q = qs.get('search');
        console.log(q);
        this.setState({
            hint : q
        });
        console.log(this.props.location);
        console.log("Props",this.props);
    }
    render()
    {
        // console.log(this.props.location.query.__firebase_request_key);
        // console.log(this.props.match.params.redirectParam);
        // console.log(this.props);
        return(
            <div align="center">
                <h1>This is Tab1 Page ,Hint : { this.state.hint }</h1>
            </div>
        );
    }
}
export default Tab1;