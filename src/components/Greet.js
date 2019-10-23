import React, { Component } from 'react';

class Greet extends Component 
{
    // constructor()
    // {
    //     super();
    //     this.state = {
    //         hint : '',
    //     }
    // }
    componentDidMount()
    {
        // const { q } = this.props..q;
        // this.setState({
        //     hint : q
        // });
        console.log(this.props);
    }
    render()
    {
        // console.log(this.props.match.params.redirectParam);
        // console.log(this.props);
        return(
            <h1>Hello World</h1>
        );
    }
}
export default Greet;


// // function Greet() {
// //     return <h1>Hello Malik</h1>;
// // }
// // const Greet = () => <h1>Hello CoStrategix</h1>;

// // export default Greet;

// export const Greet = () => <h1>Hello Malik</h1>;