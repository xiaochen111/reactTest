import React, { Component } from 'react';
import Select from 'react-select';
import ajax,{post} from '../../tool/tool.js';
import {Crumbs} from '../components/static.jsx';
import Model from '../components/model.jsx';
import { Button,Pagination,Modal,OverlayTrigger} from 'react-bootstrap';
import 'react-select/dist/react-select.css';


import { Tooltip } from 'antd';
import 'antd/dist/antd.css';


class City extends Component {

	constructor(props){
	     super(props);
	     this.state={
	        country: 'AU',
			disabled: false,
			searchable: this.props.searchable,
			selectValue: {label:"阿波"},
			clearable: true,
			options:[],
			model:false
	     }
	 }

 	updateValue (newValue) {
 		console.log("Selected: " + JSON.stringify(newValue));
		console.log('State changed to ' + newValue);
		this.setState({
			selectValue: newValue
		});
	}

	open(){
		this.setState({
			model:true
		},()=>{
			console.log(this.state)
		})
	}
	getOptions(value,callback){
		console.log(value)
		post("drop/queryportlist",{nameCn:value},function(res){
				console.log(res)
				res.forEach((item)=>item.label = item.nameCn);
				callback(null, {
			    options:res,
			      // CAREFUL! Only set this to true when there are no more options,
			      // or more specific queries will not be sent to the server.
			      complete: true
			    });
		})
	}
	componentDidMount(){
		document.title = '菜单三';
		// var that = this;
		// ajax("drop/queryportlist","",function(res){
		// 	res.forEach((item)=>item.label = item.nameCn);
		// 	that.setState({
		// 		options:res
		// 	})
		// })
	}

    render() {
        return (
            <div>
            	<Crumbs name="city"/>
                <h1>city</h1>

            {/*
                <div className="selectBox">
	            	<Select.Async
					  // autofocus
					  value={this.state.selectValue}
					  options={this.state.options}
					  loadOptions={this.getOptions.bind(this)}
					  onChange={this.updateValue.bind(this)}/>


					<Button onClick={this.open.bind(this)} >模态框</Button>
	            	<Model show={this.state.model}/>
	            </div>
			*/}
				<div className="selectBox">
		            <Tooltip title='Tooltip will show when mouse enter.' placement="topLeft">
					    <span>Tooltip will show when mouse enter.</span>
					</Tooltip>
				</div>

            </div>
        )
    }
}




export default City