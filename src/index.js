import ReactDOM from 'react-dom';
import React from 'react';
 
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import Test from './routes/Test';

ReactDOM.render((<Router>
   <Route path="/" extra component={Test} />
</Router>),document.getElementById('root'));