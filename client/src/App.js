import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "./hoc/auth";
// pages for this product
import LandingPage from "./components/views/LandingPage/LandingPage.js";
import LoginPage from "./components/views/LoginPage/LoginPage.js";
import RegisterPage from "./components/views/RegisterPage/RegisterPage.js";
import NavBar from "./components/views/NavBar/NavBar";
import Footer from "./components/views/Footer/Footer"
import UploadProductPage from './components/views/UploadProductPage/UploadProductPage'
import DetailProductPage from './components/views/DetailProductPage/DetailProductPage';
import CartPage from './components/views/CartPage/CartPage';
import HistoryPage from './components/views/HistoryPage/HistoryPage';

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/product/upload" component={Auth(UploadProductPage, true)} />
          <Route exact path="/product/:productId" component={Auth(DetailProductPage, null)} />
          <Route exact path="/user/cart" component={Auth(CartPage, true)} />
          <Route exact path="/history" component={Auth(HistoryPage, true)} />

        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
