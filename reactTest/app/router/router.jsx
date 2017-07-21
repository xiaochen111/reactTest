import React, { Component } from 'react';
import { Router, Route ,IndexRoute } from 'react-router';
import {App} from '../components/head/head.jsx';
import {Search} from '../components/containers/meau1/meau1.jsx';
import City from '../components/containers/meau2.jsx';
import bodyBox from '../components/containers/index/main.jsx';
import Login from '../components/containers/login/login.jsx';
import Member from '../components/containers/member/menberCenter.jsx';






class RouteMap extends Component {
    render() {
        return (
        	<div>
        		<Router history={this.props.history}>
	            		<Route path='/' component={App}>
	            			<IndexRoute component={bodyBox}/>
		                    <Route path='City' component={City}/>
		                    <Route path='Search' component={Search}/>
		                    <Route path='bodyBox' component={bodyBox}/>
		                    <Route path='Member' component={Member}/>
	                    </Route>
	                    <Route path='Login' component={Login}/>
	            </Router>
        	</div>
            
        )
    }
}

export default RouteMap;