import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,browserHistory,hashHistory} from 'react-router';

import IndexComponent from './src/components/Index';
import LifeCycleComponent from './src/components/LifeCycle';
import StateComponent from './src/components/State';
import ListComponent from './src/components/List';
import DetailComponent from './src/components/Detail';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={IndexComponent}/>
		<Route path="/lifeCycle" component={LifeCycleComponent}/>
		<Route path="/state" component={StateComponent}/>
		<Route path="/list" component={ListComponent}/>
		<Route path="/detail" component={DetailComponent}/>
	</Router>
	,document.getElementById('root'));