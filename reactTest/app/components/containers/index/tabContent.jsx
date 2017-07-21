import React, { Component } from 'react';
import {commonStorage} from '../../../tool/tool.js';
import $ from 'jquery';
import json from '../../../data/index.json';

class Tab extends Component{
	constructor(props){
		super(props);
		this.state={
			flag:true,
			name:"zhangsan"
		}
	}
	liClick(){
		this.setState({
			flag:false
		})
	}
	componentDidMount(){
		$(".tit_tab").find("li").click(function(){
			let index = $(this).index(); 
			$(this).siblings().removeClass("act");
			$(this).addClass("act");
			$(".showTab").children('div').css("display","none");
			$(".showTab").children('div').eq(index).show();
		})
	}
	render(){
		return (
			<div id="tab">

				<div className="tit_tab">
					<ul>
						<li className="act">海运整箱</li>
						<li>海运拼箱</li>
						<li>内支线</li>
					</ul>
				</div>
				<div className="showTab">
					<div className="">
						<Tabone/>
					</div>
					<div className="hide">2</div>
					<div className="hide">3</div>
				</div>

			</div>
		)
	}
}


class Tabone extends Component{
	constructor(props){
	     super(props);
	     this.state={
	     	aideLink:json.aideLink,
	     	freightFcl:[]
	     }
	}
	componentDidMount(){
		// http("../../../data/index.json","",function(res){
		// 	console.log(res)
		// })
	}
	render(){
		return (
			<div className="hotline">
				<div className="titH">热门航线</div>
				<ul>
					{ json.aideLink.map((item,index) => <li key={index}><a href={item.link}>{item.name}</a></li>) }
				</ul>
			</div>
		)
	}
}




export default Tab;