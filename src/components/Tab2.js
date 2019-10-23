import React, { Component } from 'react';
class Tab2 extends Component
{
    constructor()
    {
        super();
        this.state = {
            isLoaded : true
        }
        this.clickBtn = this.clickBtn.bind(this);
    }
    clickBtn()
    {
        // browserHistory.push('/displaylist');
        // this.props.history.push("/back")
        // alert("Hello");
    }
    render()
    {
        return(
            <div align="center">
                <h1>This is Tab2 Page</h1>
                <button onClick={this.clickBtn}>Click Btn</button>
            </div>
        );
    }
}
export default Tab2;