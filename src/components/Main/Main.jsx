import React, { Component } from "react";

import "./Main.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

// Site Components
import NavigationBar from "../NavigationBar/NavigationBar";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import Footer from "../Footer/Footer";
// Pages
import Home from "../Home/Home";
import About from "../About/About";
import Forms from "../Forms/Forms";
import Referral from "../Referral/Referral";
import FourZeroFour from "../FourZeroFour";
import Contact from "../Contact/Contact"
// Procedures
import RootCanals from "../Procedures/RootCanals";
import Retreatment from "../Procedures/Retreatment";
import Microsurgery from "../Procedures/Microsurgery";
import Fracture from "../Procedures/Fracture";
import Trauma from "../Procedures/Trauma";
// Patient Info
import Scheduling from "../PatientInfo/Scheduling";
import YourVisit from "../PatientInfo/YourVisit";
import FinancialPolicy from "../PatientInfo/FinancialPolicy";

const TITLE =
  "San Ramon Endodontics | Dr. Nachiket Saoji, DDS, MS | San Ramon, CA";

class Main extends Component {
  render() {
    return (
      <div className="full">
        <NavigationBar />
        <HomeCarousel />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Helmet>
                <title>{"Home | " + TITLE}</title>
              </Helmet>
              <Home />
            </Route>
            <Route exact path="/About">
              <Helmet>
                <title>{"About | " + TITLE}</title>
              </Helmet>
              <About />
            </Route>
            <Route exact path="/Scheduling">
              <Helmet>
                <title>{"Scheduling | " + TITLE}</title>
              </Helmet>
              <Scheduling />
            </Route>
            <Route exact path="/YourVisit">
              <Helmet>
                <title>{"Your Visit | " + TITLE}</title>
              </Helmet>
              <YourVisit />
            </Route>
            <Route exact path="/FinancialPolicy">
              <Helmet>
                <title>{"Financial Policy | " + TITLE}</title>
              </Helmet>
              <FinancialPolicy />
            </Route>
            <Route exact path="/Forms">
              <Helmet>
                <title>{"Patient Forms | " + TITLE}</title>
              </Helmet>
              <Forms />
            </Route>
            <Route exact path="/Referral">
              <Helmet>
                <title>{"Refer-A-Patient | " + TITLE}</title>
              </Helmet>
              <Referral />
            </Route>
            <Route exact path="/Procedures/RootCanal">
              <Helmet>
                <title>{"Root Canals | " + TITLE}</title>
              </Helmet>
              <RootCanals />
            </Route>
            <Route exact path="/Procedures/Retreatment">
              <Helmet>
                <title>{"Endodontic Retreatment | " + TITLE}</title>
              </Helmet>
              <Retreatment />
            </Route>
            <Route exact path="/Procedures/Microsurgery">
              <Helmet>
                <title>{"Microsurgery - Apicoectomy | " + TITLE}</title>
              </Helmet>
              <Microsurgery />
            </Route>
            <Route exact path="/Procedures/Fracture">
              <Helmet>
                <title>{"Fracture Detection | " + TITLE}</title>
              </Helmet>
              <Fracture />
            </Route>
            <Route exact path="/Procedures/Trauma">
              <Helmet>
                <title>{"Trauma | " + TITLE}</title>
              </Helmet>
              <Trauma />
            </Route>
            <Route exact path="/Contact">
              <Helmet>
                <title>{"Trauma | " + TITLE}</title>
              </Helmet>
              <Contact />
            </Route>
            <Route path="*">
              <Helmet>
                <title>{"404 Error: Page Not Found | " + TITLE}</title>
              </Helmet>
              <FourZeroFour />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
