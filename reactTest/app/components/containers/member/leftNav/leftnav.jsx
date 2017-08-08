import React, { Component } from 'react';
import { Link } from 'react-router';

class Leftnav extends Component{
	constructor(props){
	     super(props);
	     this.state={
	        
	     }
	 }
 	componentDidMount(){
		
		
	}
	render(){
		return (
			<div className="leftnav">
				<ul>
					<li><Link to="/page1">会员1</Link></li>
					<li><Link to="/page2">会员2</Link></li>
					<li>会员3</li>
					<li>会员4</li>
				</ul>
			</div>
		)
	}
}

export default Leftnav;