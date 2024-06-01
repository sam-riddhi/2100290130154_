
import React from 'react';
import { BrowserRouter as Router,  } from 'react-router-dom';
import Header from './components/Header';
import AllProducts from './pages/AllProducts';
import ProductDetails from './pages/ProductDetails';
import ProductsContextProvider from './context/ProductsContext';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <ProductsContextProvider>
              <AllProducts />
            </ProductsContextProvider>
          </Route>
          <Route path="/product/:id">
            <ProductDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
