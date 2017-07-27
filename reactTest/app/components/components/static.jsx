import React, { Component } from 'react';
import {post} from '../../tool/tool';
import $ from 'jquery';

// 面包屑导航
class Crumbs extends Component {
    render() {
        return (
    		<div className="port_top">
            	<img src={require('../../images/port.png')} />当前位置 : <a href="#/bodyBox">首页</a> > <a>{this.props.name}</a>
            </div>
        )
    }
}

//分页
class Page extends Component {
	render(){
		return(
			<div className="page">
				<ul>
					<li>上一页</li>
					<li>下一页</li>
				</ul>
			</div>
		)
	}
}

//加载动画
class Loading extends Component{
	render(){
		return(
			<div id="loadingToast" style={{display:"none",height:"100%", width:"100%", position: "fixed", left: 0, top: 0, zIndex: 2000}} >
		        <div id="toastMask" style={{height: "100%",width:"100%", backgroundColor: "#000000", filter: "alpha(opacity=50)", opacity:" .5"}}>
		        </div>
	        	<div id="toastParent" style={{height: "100%", width:"100%",position: "absolute", left: 0, top: 0,  display: "table",}} >
	            	<div style={{display: "table-cell", verticalAlign: "middle",}}>
	                	<div  style={{width: "160px",backgroundColor:"#000000", color:"#ffffff", margin:"0px auto",textAlign: "center",padding: "30px", borderRadius:"10px"}}>
	                       <ion-spinner icon="bubbles" className="spinner-light"></ion-spinner>
	                       <img src={require('../../images/loading.gif')} style={{width: "50px",height:"50px"}}/>
	                       <p id="toastContent" style={{marginTop: "20px"}}>Loading...</p>
	               		 </div>
	            	</div>
	         	</div>
		    </div>
		)
	}
}


//自定义下拉组件
class Choice extends React.Component{
	constructor(props){
		super(props);
		this.state={
			arr:[],
			flag:true
		}
	}

	componentDidMount(){
		$(".boxIpt").on("click","li",function(){
			var val = $(this).find('.fl').html();
			$(this).parent().slideUp();
			$(this).parents().siblings("input").val(val);
		})
		$("body").click(function(){
			$(".boxIpt").children("ul").slideUp();
		})
	}

	getLoad(url){  //模糊搜索
		 let name = this.refs.val.value;
		 let parmes = {};
		 parmes.nameCn = name;
		 let that = this;
	 	post(url,parmes,function(res){
		 	console.log(res)
		 	that.setState({
				arr:res
			})
		 });
	}	
	load_li(url){ //初始化加载下拉列表
		let that = this;
		console.log("-----------")
		if(this.state.flag){ //目的加载时为了只加载一次
			post(url,"",function(res){
			 	that.setState({
					arr:res,
					flag:false
				})
			});
		}
	}
	
	render(){
		let url = this.props.url;
		return (
			<div className="boxIpt" style={{width:this.props.width}}>
				{/* 不知道为什么onload加载时  load_li 方法加载了多次 */}
				<div onLoad={this.load_li.bind(this,url)()}></div>  
				<img src={require('../../images/qi.jpg')} />
				<input type="text" ref="val" placeholder={this.props.placeholder} onKeyUp={this.getLoad.bind(this,url)}/>
				<ul style={{width:this.props.ulWidth}}>
					{
						this.state.arr.map( (item,index)=><li key={index} id={item[this.props.id]} ><span className="fl">{item[this.props.name1]}</span><span className="fr">{item[this.props.name2]}</span></li> )
					}
				</ul>
			</div>
		)
	}
}

export {Crumbs,Page,Loading,Choice}
