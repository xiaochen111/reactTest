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
		var that = this;
		ajax("drop/queryportlist","",function(res){
			console.log(res)
			that.setState({
				res:res
			})
		});

		$(".boxIpt").find("input").click(function(){
			$(this).parent().siblings().children("ul").slideUp();
			$(this).next("ul").slideToggle();
		})
		
	}
	render(){
		return (
			<div className="container">
				<h1>这里是会员中心</h1>
				<Choice width="200px" ulWidth="300px" res={this.state.res} name1="nameCn" name2="nameEn" placeholder="目的港"/>
			</div>
		)
	}
}

export default Member;