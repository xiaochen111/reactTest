import React, { Component } from 'react';
import {commonStorage} from '../../../tool/tool.js';
import $ from 'jquery';
import ajax from '../../../tool/tool.js';
import {Choice} from '../meau1/meau1.jsx';
import {Crumbs} from '../../components/static.jsx';
import Leftnav from './leftNav/leftnav.jsx';



class Member extends Component{
	constructor(props){
	     super(props);
	     this.state={}
	 }
 	componentDidMount(){
		document.title = "会员中心"		
	}
	render(){
		return (
			<div>
				<Crumbs name="会员中心"/>
				<div style={{"height":"auto"}}>
					<Leftnav/>
					<div className="men_content">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}
export default Member;