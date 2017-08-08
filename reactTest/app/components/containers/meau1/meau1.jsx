import React from 'react';
import ajax,{post} from '../../../tool/tool';
import {Crumbs,Loading,Choice,Page,parmesObj} from '../../components/static.jsx';
import Table from './list.jsx'
import $ from 'jquery';

import DatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style/css';


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
	        },
	        imgNo:false
	     }
	 }
 	componentDidMount(){
 		let that = this;
 		let parmesobj = parmesObj();
 		that.setState(Object.assign(that.state.parmes, that.state.parmes, {startPortId: parmesobj.startPortId,shippingId:parmesobj.shippingId}))


 		console.log(that.state.parmes)


 		document.title = '菜单二';
		listLoad();//请求列表数据
		

		$(".boxIpt").find("input").click(function(event){
			event.stopPropagation();
			$(this).parent().siblings().children("ul").slideUp();
			$(this).next("ul").slideToggle();
		})

		//搜索框操作======================================================================================================================================
		$(".boxIpt").each(function(index, item) {
			$(item).on("click","li",function(){
				var id = $(this)["0"].id;
				switch(index){
					case 0:
						that.setState(Object.assign(that.state.parmes, that.state.parmes, {startPortId: id}))
					    break;
					case 1:
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
		//搜索框操作================================================================================================================================================


		function listLoad(){
			$("#loadingToast").show()
			post(that.state.url,that.state.parmes,function(res){ //请求列表数据
				$("#loadingToast").hide();
				if(!res.rows.length){
					that.setState({
						imgNo:true,
					})
				}
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

	date(date,dateString){
		console.log(dateString)
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


                	<DatePicker onChange={this.date.bind(this)}/>

                	<button id="serach">查询</button>
                	<div className="clearfix"></div>
                	<Table arr={this.state.list} imgNo={this.state.imgNo}/> 
                	<div>
                		<Page url={this.state.url} parmes={this.state.parmes} page={this.page.bind(this)}/>
                	</div>
                </div>
                <Loading />
            </div>
        )
    }
}





export {Search}