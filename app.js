import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,browserHistory,hashHistory} from 'react-router';

import IndexComponent from './src/components/Index';
import LifeCycleComponent from './src/components/LifeCycle';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={IndexComponent}/>
		<Route path="/lifeCycle" component={LifeCycleComponent}/>
	</Router>
	,document.getElementById('root'));