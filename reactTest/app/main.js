import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { hashHistory,routes } from 'react-router';
import RouteMap from './router/router.jsx';
import './components/style.less';
import './css/font-awesome.css';


class Index extends Component{
	render(){
		return(
			<div>
				<RouteMap history={hashHistory}/>
			</div>
		)
	}
}


ReactDom.render(<Index/>, document.getElementById('content'));