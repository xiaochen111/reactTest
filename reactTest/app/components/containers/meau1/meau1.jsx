import React from 'react';
import ajax,{post} from '../../../tool/tool';
import {Crumbs,Loading,Choice,Page} from '../../components/static.jsx';
import Table from './list.jsx'
import $ from 'jquery';


class Search extends React.Component {
	constructor(props){
	     super(props);
	     this.state={
	        list:[],
	        url:'freightfclweb/queryPage',
	        parmes:{
	        	pageNo:1,
	        	startPortId:"",
	        	shippingId:"",
	        }
	     }
	 }
 	componentDidMount(){
		let that = this;
		//let parmes = {pageNo:1}; //获取参数集合；

		listLoad();//请求列表数据
		

		$(".boxIpt").find("input").click(function(event){
			event.stopPropagation();
			$(this).parent().siblings().children("ul").slideUp();
			$(this).next("ul").slideToggle();
		})

		
		$(".boxIpt").each(function(index, item) {
			$(item).on("click","li",function(){
				var id = $(this)["0"].id;
				switch(index){
					case 0:
					    // console.log(that.state)
					    // that.setState({
					    // 	parmes:{
					    // 		startPortId:id
					    // 	}
					    // },()=>console.log(that.state))
						 that.setState(Object.assign(that.state.parmes, that.state.parmes, {startPortId: id}))
					    break;
					case 1:
					    // that.setState({
					    // 	parmes:{
					    // 		shippingId:id
					    // 	}
					    // })
						that.setState(Object.assign(that.state.parmes, that.state.parmes, {shippingId: id}))
					    break;
				}
			})
		});

		$(".boxIpt").each(function(index, item) {
			$(item).on("keyup","input",function(){
				switch(index){
					case 0:
						if(!$(this).val()){
							that.setState(Object.assign(that.state.parmes, that.state.parmes, {startPortId: ""}))
						}
					    break;
					case 1:
					    if(!$(this).val()){
					    	that.setState(Object.assign(that.state.parmes, that.state.parmes, {shippingId: ""}))
					    }
					    break;
				}
			})
		});

		

		//搜索
		$("#serach").click(function(){
			listLoad();
		})

		function listLoad(){
			$("#loadingToast").show()
			post(that.state.url,that.state.parmes,function(res){ //请求列表数据
				$("#loadingToast").hide();
				console.log(res);
				that.setState({
					list:res.rows,
				})
			})
		}
	}

	page(res,pageNum){
		this.setState({
			list:res,
		})
		this.setState(Object.assign(this.state.parmes, this.state.parmes, {pageNo: pageNum}))
	}
	 componentWillReceiveProps(newProps) {
	    console.log(newProps);
	    
	 }
    render() {
        return (
            <div>
            	<Crumbs name="serach"/>
                <h1>Search</h1>
                <div className="custom">
                	<Choice width="200px"
                	 ulWidth="300px" 
                	 name1="nameCn" 
                	 name2="nameEn" 
                	 id="id" 
                	 placeholder="目的港"
                	 url="drop/queryportlist" />

                	<Choice 
                	width="200px" 
                	ulWidth="500px" 
                	name1="nameCn" 
                	name2="nameEn" 
                	id="id" 
                	placeholder="船公司" 
                	url="drop/queryshippinglist" />

                	<button id="serach">查询</button>
                	<div className="clearfix"></div>
                	<Table arr={this.state.list}/> 
                	<div><Page url={this.state.url} parmes={this.state.parmes} page={this.page.bind(this)}/></div>
                </div>
                <Loading />
            </div>
        )
    }
}





export {Search}