import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Error from "../Components/404/404";
import Navbar from "../Components/Navbar"
import Bookatablenew from "../Components/Bookatable/Bookatablenew"
import Landing from "../Components/Landing"
import Footer from "../Components/Footer/Footer"
import { DetailPage } from "../Components/Resturant_detail_page/DetailPage"
import Dineoutpay from "../Components/Bookatable/dineoutpay";
import { BookingInfo } from "../Components/BookingInfo/BookingInfo";


const Routes = () => {

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Navbar />
          <Landing />
          <Footer />
        </Route>
        <Route path="/book" exact>
          <Navbar />
          <Bookatablenew />
          <Footer />
        </Route>
        <Route path="/pay" exact>
          <Navbar />
          <Dineoutpay />
          <Footer />
        </Route>
        <Route path="/book/:name" exact>
          <Navbar />
          <DetailPage />
          <Footer />
        </Route>
        <Route path="/success/:name" exact>
          <Navbar />
          <BookingInfo />
          <Footer />
        </Route>
        <Route>
          <Error></Error>
        </Route>
      </Switch>
    </>
  );
};

export default Routes
