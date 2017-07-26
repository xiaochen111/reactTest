import React from 'react';
import ajax from '../../../tool/tool';
import {post} from '../../../tool/tool';
import {Crumbs,Page,Loading} from '../../components/static.jsx';
import Table from './list.jsx'
import $ from 'jquery';


class Search extends React.Component {
	constructor(props){
	     super(props);
	     this.state={
	        qishi:[],
	        mudi:[],
	        list:[]
	     }
	 }
 	componentDidMount(){
		let that = this;
		let parmes = {pageNo:1}; //获取参数集合；
		let totalPage = 0; //总页数

		ajax("drop/queryportlist","",function(res){
			that.setState({
				qishi:res
			})
		});
		ajax("drop/queryshippinglist","",function(res){
			that.setState({
				mudi:res
			})
		});

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
					    parmes.startPortId=id;
					    break;
					case 1:
					    parmes.shippingId=id;
					    break;
				}
				console.log(parmes)
			})
		});

		//翻页
		$(".page").find("li").click(function(){
			var index = $(this).index();
			if(index===1){
				parmes.pageNo++;
				if(parmes.pageNo>=totalPage)parmes.pageNo=totalPage;
			}else if(index===0){
				parmes.pageNo--;
				if(parmes.pageNo<=0)parmes.pageNo=1;
			}
			listLoad(parmes)
		})

		//搜索
		$("#serach").click(function(){
			listLoad();
		})

		function listLoad(){
			$("#loadingToast").show()
			post("freightfclweb/queryPage",parmes,function(res){ //请求列表数据
				$("#loadingToast").hide();
				totalPage=res.totalPage;
				console.log(res);
				that.setState({
					list:res.rows
				})
			})
		}


	}
	
    render() {
        return (
            <div>
            	<Crumbs name="serach"/>
                <h1>Search</h1>
                <div className="custom">
                	<Choice width="200px" ulWidth="300px" res={this.state.qishi} name1="nameCn" name2="nameEn" id="id" placeholder="目的港"/>
                	<Choice width="200px" ulWidth="500px" res={this.state.mudi} name1="nameCn" name2="nameEn" id="id" placeholder="船公司"/>
                	<button id="serach">查询</button>
                	<div className="clearfix"></div>
                	<Table arr={this.state.list}/> 
                	<div><Page/></div>
                </div>
                <Loading />
            </div>
        )
    }
}


//自定义下拉组件
class Choice extends React.Component{
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
	
	render(){
		return (
			<div className="boxIpt" style={{width:this.props.width}}>
				<img src={require('../../../images/qi.jpg')} />
				<input type="text" placeholder={this.props.placeholder}/>
				<ul style={{width:this.props.ulWidth}}>
					{
						this.props.res.map( (item,index)=><li key={index} id={item[this.props.id]} ><span className="fl">{item[this.props.name1]}</span><span className="fr">{item[this.props.name2]}</span></li> )
					}
				</ul>
			</div>
		)
	}
}


export {Search,Choice}