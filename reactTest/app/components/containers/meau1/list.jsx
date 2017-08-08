import React from 'react';
import {post} from '../../../tool/tool.js'; 

import { Tooltip } from 'antd';
import 'antd/dist/antd.css';


class Table extends React.Component{
	listClick(obj){
		console.log(obj)
	}
	render(){
		let arr = this.props.arr; //父组件向子组件传值
		let imgNos = this.props.imgNo;
		return(
			<div className="table_box">
				<div className="thead">
					<ul>
						<li className="li_one">船公司/供应商</li>
						<li className="li_two">起运港/港区</li>
						<li className="li_three">航程/中转</li>
						<li className="li_four">目的港/挂靠</li>
						<li className="li_five">截关日/开航日</li>
						<li className="li_six">有效期</li>
						<li className="li_ele">20GP</li>
						<li className="li_eight">40GP</li>
						<li className="li_nine">40HP</li>
						<li className="li_ten">{name}</li>
					</ul>
				</div>
				<div className="tbody">
					{
						arr.map(
							(item,index) => <List 
							key={index}
							shippingName={item.shippingName} 
							supplierName={item.supplierName} 
							portStartNameEn={item.portStartNameEn} 
							portStartName={item.portStartName} 
							wharfName={item.wharfName} 
							voyage={item.voyage}
							transportName={item.transportName}
							portEndNameEn={item.portEndNameEn}
							portEndName={item.portEndName}
							portEndWharf={item.portEndWharf}
							cutoffDay={item.cutoffDay}
							schedule={item.schedule}
							beginDateStr={item.beginDateStr}
							endDateStr={item.endDateStr} 
							price20={item.price20}
							price40={item.price40}
							price40hq={item.price40hq}
							listClick={this.listClick.bind(this,item)} />
						)
					}
					{
						!arr.length&&imgNos ? <img src={require('../../../images/nofind.jpg')} /> : null
					}
				</div>
			</div>
		)
	}
}


class List extends React.Component{
	render(){
		return(
			<div className="list">
				<ul>
					<li className="li_one">
						<p>
							<span>{this.props.shippingName}</span><br/><span>{this.props.supplierName}</span>
						</p>
					</li>
					<li className="li_two">
						<p>
							<span>{this.props.portStartNameEn}({this.props.portStartName})</span><br/><span>{this.props.wharfName}</span>
						</p>
					</li>
					<li className="li_three">
						<p>
							<span>{this.props.voyage || '-'}</span><br/><span>{this.props.transportName || '-'}</span>
						</p>
					</li>
					<li className="li_four">
						<p>
							<Tooltip title={`${this.props.portEndNameEn}(${this.props.portEndName})`} placement="top">
							    <span>{this.props.portEndNameEn}({this.props.portEndName})</span>
							 </Tooltip>
							<br/><span>{this.props.portEndWharf || '-'}</span>
						</p>
					</li>
					<li className="li_five">
						<p>
							<span>{this.props.cutoffDay  || '-'}</span><br/><span>{this.props.schedule || '-'}</span>
						</p>
					</li>
					<li className="li_six">
						<p>
							<span>{this.props.beginDateStr}</span><br/><span>{this.props.endDateStr}</span>
						</p>
					</li>
					<li className="li_ele">{this.props.price20===999999999?'电询':(this.props.price20 ? '$'+this.props.price20 :'-')}</li>
					<li className="li_eight">{this.props.price40===999999999?'电询':(this.props.price40 ? '$'+this.props.price40 :'-')}</li>
					<li className="li_nine">{this.props.price40hq===999999999?'电询':(this.props.price40hq ? '$'+this.props.price40hq :'-')}</li>
					<li className="li_ten">
						<button onClick={this.props.listClick}>点击</button>
					</li>
				</ul>
			</div>
		)
	}
}


export default Table;