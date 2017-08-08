import React, { Component } from 'react';
import httpAxios from '../../tool/axios.js';
import $ from 'jquery';


//自定义下拉组件
class Choice extends React.Component{
	constructor(props){
		super(props);
		this.state={
			arr:[],
			url:props.url,
		}
	}

	componentDidMount(){
		$(".boxIpt").on("click","li",function(){
			var val = $(this).find('.fl').html();
			var id = $(this)["0"].id;
			$(this).parent().slideUp();
			$(this).parents().siblings(".ipt_text").val(val);
			$(this).parents().siblings(".ipt_hide").val(id);
		})
		$("body").click(function(){
			$(".boxIpt").children("ul").slideUp();
		})
		// $('input').click(function(e){
		// 	e.stopPropagation();
		// })


		// 列表初始化加载
		let url = this.state.url;
		let that = this;
		httpAxios(url,'',function(res){
		 	console.log(res)
		 	that.setState({
				arr:res||[]    //请求了两次  有一次请求请没有设置请求头  第二次为null
			},()=>{
				console.log(that.state.arr)
			})
		});
	}

	getLoad(){  //模糊搜索
		 let name = this.refs.val.value;
		 let parmes = {};
		 parmes.nameCn = name;
		 let that = this;
	 	 httpAxios(this.state.url,parmes,function(res){
		 	console.log(res)
		 	that.setState({
				arr:res
			})
		 });
	}

	slideDown(){
		let ipt = this.refs.val;
		$(ipt).next("ul").slideToggle();
	}

	render(){
		return (
			<div className="boxIpt" style={{width:this.props.width}}>
				{	
					this.props.imgIcon === "qi" ?
					<img src={require('../../images/qi.jpg')} />
					:
					<img src={require('../../images/mu.jpg')} />
				}
				<input type="hidden" className="ipt_hide" />
				<input type="text" className="ipt_text" ref="val" placeholder={this.props.placeholder} onClick={this.slideDown.bind(this)} onKeyUp={this.getLoad.bind(this)}/>
				<ul style={{width:this.props.ulWidth}}>
					{
						this.state.arr.map( (item,index)=><li key={index} id={item[this.props.id]} ><span className="fl">{item[this.props.name1]}</span><span className="fr">{item[this.props.name2]}</span></li> )
					}
				</ul>
			</div>
		)
	}
}

export default Choice;