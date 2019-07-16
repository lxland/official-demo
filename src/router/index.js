import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../pages/home/home';
import About from '../pages/about/index';

class BasicRoute extends React.Component {
	render(){
		return(
			<Router >
			<div>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />                                                                                                                                                                                                                                                                                                                                                                                                                                       
			</div>
			</Router>
		)
	}
}
export default BasicRoute;