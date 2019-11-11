import React from 'react';
import { Component } from 'react';
import Home from './components/Home'
import {  BrowserRouter as Router,   Route , Switch} from "react-router-dom";
import Products from './components/Products';
import Tab1 from './components/Tab1';
// import Login from './components/Login'
import SearchProducts from './components/SearchProducts';
import ProductDetails from './components/ProductDetails';
// import Register from './components/Register';
import Authentication from './components/Authentication';
import AuthModal from './components/AuthModal';
import CartDetails from './components/CartDetails';
import BillingShipping from './components/BillingShipping';
import CartSummary from './components/CartSummary';
import CheckoutPage from './components/CheckoutPage';
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
              <Route exact path="/modal" component={AuthModal} />
              {/* <Route exact path="/Tab1" render={(props) => <Tab1 {...props} />} /> */}
              {/* <Route exact path="/search" render={(props) => <SearchProducts {...props} />} /> */}
              <Route exact path="/product" component={ProductDetails} />
              <Route exact path="/all" component={Products} />
              <Route exact path="/Tab1"><Tab1/></Route>
              {/* <Route exact path="/login"><Login /></Route> */}
              {/* <Route exact path="/register"><Register /></Route> */}
              <Route exact path="/auth"><Authentication /></Route>
              <Route exact path="/cart-details"><CartDetails /></Route>
              <Route exact path="/billing-shipping"><BillingShipping />
              </Route><Route exact path="/checkout"><CheckoutPage /></Route>
              <Route exact path="/test"><CartSummary /></Route>
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
