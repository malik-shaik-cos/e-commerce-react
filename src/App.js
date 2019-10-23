import React from 'react';
import { Component } from 'react';
import Home from './components/Home'
import {  BrowserRouter as Router,   Route , Switch} from "react-router-dom";
import Products from './components/Products';
import Tab2 from './components/Tab2';
import SearchProducts from './components/SearchProducts';
import ProductDetails from './components/ProductDetails';
// import Tab1 from './components/Tab1';
// const Greeting = ({match}) => console.log('hint : ',match.params.q);
class App extends Component
{
  // constructor()
  // {
  //   super();
  //   // this.state = {
  //   //   hint : this.match.params.q
  //   // }
  // }
  render()
  {
    // console.log("I am hint: ",this.state.hint);
    // const greeting = "Welcome to React.";
    return (
      <div className="App">
        <Router>
          {/* <Link to="/">Home</Link> <br></br>
          <Link to="/malik">Go</Link> */}
            <Switch>
              <Route exact path="/"><Home /></Route>
              {/* <Route exact path="/:q" /> */}
              {/* <Route exact path="/:query"><Greet data = {greeting} /></Route> */}
              {/* <Route exact path="/search">
                  <SearchProducts/>                  
              </Route> */}  
              <Route exact path="/search" component={SearchProducts} />
              {/* <Route exact path="/Tab1" render={(props) => <Tab1 {...props} />} /> */}
              {/* <Route exact path="/search" render={(props) => <SearchProducts {...props} />} /> */}
              <Route exact path="/product" component={ProductDetails} />
              <Route exact path="/all" component={Products} />
              <Route exact path="/Tab2"><Tab2 /></Route>
              {/* <Route exact path="/products"><Products /></Route> */}
            </Switch>
          {/* <Switch>
            <Route path="/" component = { Home } />
            <Route path="/search"> <Greet /> </Route>
          </Switch> */}
        </Router>
      </div>
    ) ;
  }
}
export default App;
