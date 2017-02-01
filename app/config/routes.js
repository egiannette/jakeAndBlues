import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Main from '../about'
//import  from '../pages/SecondPage'
import MeatCalculator from '../calculator'

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>	
      
      //<Route path="secondpage" component={SecondPage}/>
      <Route path="meatcalculator" component={MeatCalculator}/>
    </Route>
  </Router>
);