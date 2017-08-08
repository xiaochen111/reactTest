import React, { Component } from 'react';
import {Crumbs} from '../../components/static.jsx';
import {Listone,Listtwo} from './boatlist.jsx';
import Topser from './search.jsx';
import './boat.less';
import httpAxios from '../../../tool/axios.js';




import { Checkbox, Row, Col } from 'antd';

class Boat extends Component{
	componentDidMount(){
		// httpAxios('api/queryDefaultLoadPort','',function(res){
		// 	console.log(res)
		// })
	}
	render(){
		return (
			<div>
				<Crumbs name='船期查询' />
				<div id="shipschedule">
					<Topser/>
					<Navser/>
				</div>
			</div>
		)
	}
}



class Navser extends Component{
	constructor(props){
	     super(props);
	     this.state={
	        bgMb:true,
	        index:0
	     }
	}
	change1(){
		this.setState({
			bgMb:true
		})
	}
	change2(){
		this.setState({
			bgMb:false
		})
	}
	onChange(checkedValues) {
	  console.log('checked = ', checkedValues);
	}
	indexClick(li){
		this.setState({
			index:this.refs[li].value
		})
	}
	render(){
		return (
			<div>
		
			    <div className="criteria">
			    	<div className="allboat">全部船公司 <i className="fa fa-angle-down"></i></div>
			    	<div className="week">
			    		<ul className="check">
							<Checkbox.Group onChange={this.onChange.bind(this)}>
							    <Row>
							      <Col span={3}><Checkbox value="1">周一</Checkbox></Col>
							      <Col span={3}><Checkbox value="2">周二</Checkbox></Col>
							      <Col span={3}><Checkbox value="3">周三</Checkbox></Col>
							      <Col span={3}><Checkbox value="4">周四</Checkbox></Col>
							      <Col span={3}><Checkbox value="5">周五</Checkbox></Col>
							      <Col span={3}><Checkbox value="6">周六</Checkbox></Col>
							      <Col span={3}><Checkbox value="7">周日</Checkbox></Col>
							      <Col span={3}><Checkbox value="8">共舱船</Checkbox></Col>
							    </Row>
							</Checkbox.Group>
						</ul>
			    	</div>
			    	<div className="sort_tit">排序:&nbsp;</div>
			    	<ul className="sort">
			    		<li ref="li1" value="1" className={this.state.index === 1 ? "selCol" : ""}  onClick={this.indexClick.bind(this,"li1")} >船公司 <span className="fa fa-long-arrow-up"></span></li>
			    		<li ref="li2" value="2" className={this.state.index === 2 ? "selCol" : ""}  onClick={this.indexClick.bind(this,"li2")}>出发时间 <span className="fa fa-long-arrow-up"></span></li>
			    		<li ref="li3" value="3" className={this.state.index === 3 ? "selCol" : ""}  onClick={this.indexClick.bind(this,"li3")}>航程 <span className="fa fa-long-arrow-up"></span></li>
			    		<li ref="li4" value="4" className={this.state.index === 4 ? "selCol" : ""}  onClick={this.indexClick.bind(this,"li4")}>到达时间 <span className="fa fa-long-arrow-up"></span></li>
			    		<li ref="li5" value="5" className={this.state.index === 5 ? "selCol" : ""}  onClick={this.indexClick.bind(this,"li5")}>船名 <span className="fa fa-long-arrow-up"></span></li>
			    	</ul>
			    	<div className={this.state.bgMb ? "btns_bg bg1":"btns_bg bg2"}>
			    		<span onClick={this.change1.bind(this)}></span>
			    		<span onClick={this.change2.bind(this)}></span>
			    	</div>
			    </div>

			    {	
			    	this.state.bgMb 
			    	?
			    	<div>
			    		{
			    			[1,1].map((item,index)=><Listone key={index} />)
			    		}
			    	</div>
			    	:
			    	<div className="boxCont">
						<ul className="thead">
			    			<li className="li_1">船公司</li>
			    			<li className="li_2">船名</li>
			    			<li className="li_3">航次</li>
			    			<li className="li_4">出发时间</li>
			    			<li className="li_5">航程</li>
			    			<li className="li_6">到达时间</li>
			    			<li className="li_7">起始港</li>
			    			<li className="li_8">目的港</li>
			    		</ul>
			    		
			    		{
			    			[1,1].map((item,index)=><Listtwo key={index}/>)
			    		}
		    		</div>
			    	
			    }
			</div>
		)
	}
}

export default Boat;





