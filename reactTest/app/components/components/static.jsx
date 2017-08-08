import React, { Component } from 'react';
import {post} from '../../tool/tool';
import $ from 'jquery';
import { Button,Pagination,Modal,OverlayTrigger,Tooltip} from 'react-bootstrap';

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
	constructor(props){
	     super(props);
	     console.log(props)
	     this.state={
	        activePage: 1,
	        url:props.url,
	        parmes:props.parmes,
	        page:"",
	        rows:[]
	     }
	}
	handleSelect(eventKey) {
		let that = this;
	    this.setState({
	      activePage: eventKey
	    });
	    this.setState(
	    Object.assign(that.state.parmes, that.state.parmes, {pageNo: eventKey})
	    ,()=>{
	    	$("#loadingToast").show()
		    post(this.state.url, this.state.parmes ,function(res){
		    	$("#loadingToast").hide();
		    	that.props.page(res.rows,eventKey)  //通过props调用父级的方法 改变父级的state
		    })
	    })
	}
	componentDidMount(){
		
	}
	componentWillReceiveProps(newProps) {
	    let that = this;
		console.log(newProps.parmes)
		post(this.state.url,newProps.parmes,function(res){
			that.setState({
				page:res.totalPage,
				rows:res.rows
			})
		})
	  }
	render(){
		let len = this.state.rows.length;
		return(
		    <div className="page">
		    	{
		    		len===0?null
		    		:<Pagination
				        prev
				        next
				        first
				        last
				        ellipsis
				        boundaryLinks
				        items={parseInt(this.state.page)}
				        maxButtons={5}
				        activePage={this.state.activePage}
				        onSelect={this.handleSelect.bind(this)} />
				}
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


		// 列表初始化加载
		let url = this.state.url;
		let that = this;
		// post(url,"",function(res){
		//  	console.log(res)
		//  	that.setState({
		// 		arr:res
		// 	})
		// });
	}

	getLoad(){  //模糊搜索
		 let name = this.refs.val.value;
		 let parmes = {};
		 parmes.nameCn = name;
		 let that = this;
	 	 post(this.state.url,parmes,function(res){
		 	console.log(res)
		 	that.setState({
				arr:res
			})
		 });
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
				<input type="hidden" className="ipt_hide"/>
				<input type="text" className="ipt_text" ref="val" placeholder={this.props.placeholder} onKeyUp={this.getLoad.bind(this)}/>
				<ul style={{width:this.props.ulWidth}}>
					{
						this.state.arr.map( (item,index)=><li key={index} id={item[this.props.id]} ><span className="fl">{item[this.props.name1]}</span><span className="fr">{item[this.props.name2]}</span></li> )
					}
				</ul>
			</div>
		)
	}
}


let parmesObj = function(){
	var obj = {};
	var urlStr = location.hash;
	var index = urlStr.indexOf("?");
	urlStr = urlStr.substring(index+1);
	let arr = urlStr.split("&");
	arr.forEach(item => {
		let arr = item.split("=");
		obj[arr[0]]=arr[1]
	})
	return obj;
}


export {Crumbs,Page,Loading,Choice,parmesObj}
