import React, { Component } from 'react';
import $ from 'jquery';
import {Choice} from '../../components/static.jsx'



class Banner extends Component{
	componentDidMount(){
		//轮播图平铺
		let left = $(".banner").position().left;
		$(".banner").css({
			"margin-left":-left+'px',
			"margin-right":-left+'px'
		})

		//下拉插件事件
		$(".boxIpt").find("input").click(function(event){
			event.stopPropagation();
			$(this).parent().parent().siblings().find("ul").slideUp();
			$(this).next("ul").slideToggle();
		})


		//搜索
		$("button").click(function(){
			var startPortId = $(".ipt_hide").eq(0).val();
			var shippingId = $(".ipt_hide").eq(1).val();
			console.log(startPortId,shippingId);
			location.hash=`#/Search?startPortId=${startPortId}&shippingId=${shippingId}`
		})

	}
	render(){
		return (
			<div className="banner">
				<div className="containers">
					<div className="boxTab">
						<h2>海运</h2>

						<div className="iptSelect">
							<Choice width="300px"
		                	 ulWidth="300px" 
		                	 name1="nameCn" 
		                	 name2="nameEn" 
		                	 id="id" 
		                	 placeholder="目的港" />
		                	{/*url="drop/queryportlist"*/} 
	                	</div>

	                	<div className="iptSelect">
		                	<Choice 
		                	width="300px" 
		                	ulWidth="500px" 
		                	name1="nameCn" 
		                	name2="nameEn" 
		                	id="id" 
		                	placeholder="船公司"  />
		                	{/*url="drop/queryshippinglist"*/}
	                	</div>

	                	<button>查询</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Banner;