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
	     }
	}
	handleSelect(eventKey) {
		console.log(eventKey)
		let that = this;
	    this.setState({
	      activePage: eventKey
	    });
	    this.setState({
	    	parmes:{
	    		pageNo:eventKey
	    	}
	    },()=>{
	    	$("#loadingToast").show()
		    post(this.state.url, this.state.parmes ,function(res){
		    	console.log(res)
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
			console.log(res)
			that.setState({
				page:parseInt(res.totalPage)
			})
		})
	  }
	render(){
		return(
			<div className="page">
			    <Pagination
			        prev
			        next
			        first
			        last
			        ellipsis
			        boundaryLinks
			        items={this.state.page}
			        maxButtons={5}
			        activePage={this.state.activePage}
			        onSelect={this.handleSelect.bind(this)} />
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
			$(this).parent().slideUp();
			$(this).parents().siblings("input").val(val);
		})
		$("body").click(function(){
			$(".boxIpt").children("ul").slideUp();
		})


		// 列表初始化加载
		let url = this.state.url;
		let that = this;
		post(url,"",function(res){
		 	console.log(res)
		 	that.setState({
				arr:res
			})
		});
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
				<img src={require('../../images/qi.jpg')} />
				<input type="text" ref="val" placeholder={this.props.placeholder} onKeyUp={this.getLoad.bind(this)}/>
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
