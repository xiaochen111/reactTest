import React, { Component } from 'react';
import {commonStorage} from '../../../tool/tool.js';
import $ from 'jquery';
import ajax from '../../../tool/tool.js';
import {Choice} from '../meau1/meau1.jsx';



class Member extends Component{
	constructor(props){
	     super(props);
	     this.state={
	        res:[]
	     }
	 }
 	componentDidMount(){
		
		
	}
	render(){
		return (
			<div className="container">
				<h1>这里是会员中心</h1>
			</div>
		)
	}
}

export default Member;