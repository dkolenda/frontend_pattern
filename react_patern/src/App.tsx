import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {CustomersProvider} from './context'
import {ProductsProvider} from './productsContext'
import {Customers} from './customers/Customers';
import {Products} from './products/Products';
import Table from './Table';

function App() {
  return (
    <CustomersProvider>
      <ProductsProvider>
    <div className="App">
    <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/products">Produkty</Link>
              </li>
              <li>
                <Link to="/customers">Klienci</Link>
              </li>
              <li>
                <Link to="/table">Tabela</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/customers">
              <Customers />
            </Route>
            <Route path="/products">
              <Products />
              <Table/>
            </Route>
            <Route path="/table">
              <Table />
            </Route>
            <Route path="/">
              <Customers />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
    </ProductsProvider>
    </CustomersProvider>
   
  );
}

export default App;
