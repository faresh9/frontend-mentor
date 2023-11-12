// AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ThankYouPage from './pages/ThankYouPage';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/thankyou" component={ThankYouPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
