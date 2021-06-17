import React from 'react';
// import { withRouter } from "react-router";
// import { Switch, Route } from "react-router-dom";
import GlobalStyles from '../styles/GlobalStyles';
import HomePage from './home/home';
// import SunnyDay from "./pages/sunnyday/sunnyday";
// import RainyDay from "./pages/rainyday/rainyday";

const Home = () => (
  <React.Fragment>
    <GlobalStyles />
    <HomePage />

    {/* <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/sunnyday" component={SunnyDay} />
      <Route path="/rainyday" component={RainyDay} />
    </Switch> */}
  </React.Fragment>
);

// export default withRouter(Home);
export default Home;
