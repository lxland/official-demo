import React from 'react';
import { BrowserRouter as Router, Route  , Switch} from "react-router-dom";
import Home from '../pages/home/home';
import About from '../pages/about/index';

class BasicRoute extends React.Component {
	render(){
		return(
			<Router >
				<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />    
				</Switch>
			</Router>
		)
	}
}
export default BasicRoute;