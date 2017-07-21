import React from 'react';
import ajax from '../../../tool/tool.js';
import {Crumbs} from '../../components/static.jsx';
import $ from 'jquery';

class Search extends React.Component {

	constructor(props){
	     super(props);
	     this.state={
	        qishi:[],
	        mudi:[]
	     }
	 }
 	componentDidMount(){
		var that = this;
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
		$(".boxIpt").find("input").click(function(event){
			event.stopPropagation();
			$(this).parent().siblings().children("ul").slideUp();
			$(this).next("ul").slideToggle();
		})

		let ids = {}; //获取参数集合；
		$(".boxIpt").each(function(index, item) {
			$(item).on("click","li",function(){
				var id = $(this)["0"].id;
				switch(index){
					case 0:
					    ids.mudi=id;
					    break;
					case 1:
					    ids.boat=id;
					    break;
				}
				console.log(ids)
			})
		});
	}
	
    render() {
        return (
            <div>
            	<Crumbs name="serach"/>
                <h1>Search</h1>
                <div className="custom">
                	<Choice width="200px" ulWidth="300px" res={this.state.qishi} name1="nameCn" name2="nameEn" id="id" placeholder="目的港"/>
                	<Choice width="200px" ulWidth="500px" res={this.state.mudi} name1="nameCn" name2="nameEn" id="id" placeholder="船公司"/>
                	<button>查询</button>
                </div>
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