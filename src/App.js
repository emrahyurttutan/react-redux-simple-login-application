import React, { Component } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Pages";
import Orders from "./components/Pages/Orders";
import Customers from "./components/Pages/Customers";
import Integrations from "./components/Pages/Integrations";
import Reports from "./components/Pages/Reports";
import { store } from "./helpers";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Wrapper from "./components/Wrapper";

const wrapperDashboard = Wrapper(Dashboard);
const wrapperOrders = Wrapper(Orders);
const wrapperReports = Wrapper(Reports);
const wrapperIntegrations = Wrapper(Integrations);
const wrapperCustomers = Wrapper(Customers);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={wrapperDashboard} />
            <Route exact path="/musteriler" component={wrapperCustomers} />
            <Route exact path="/siparisler" component={wrapperOrders} />
            <Route exact path="/raporlar" component={wrapperReports} />
            <Route
              exact
              path="/entegrasyonlar"
              component={wrapperIntegrations}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
