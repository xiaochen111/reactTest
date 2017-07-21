import React, { Component } from 'react';
import Select from 'react-select';
import ajax from '../../tool/tool.js';
import {Crumbs} from '../components/static.jsx';
import 'react-select/dist/react-select.css';

class City extends Component {

	constructor(props){
	     super(props);
	     this.state={
	        country: 'AU',
			disabled: false,
			searchable: this.props.searchable,
			selectValue: 'new-south-wales',
			clearable: true,
			options:[]
	     }
	 }

 	updateValue (newValue) {
 		console.log("Selected: " + JSON.stringify(newValue));
		console.log('State changed to ' + newValue);
		this.setState({
			selectValue: newValue
		});
	}

	componentDidMount(){
		var that = this;
		ajax("drop/queryportlist","",function(res){
			res.forEach((item)=>item.label = item.nameCn);
			that.setState({
				options:res
			})
		})
	}

    render() {
        return (
            <div>
            	<Crumbs name="city"/>
                <h1>city</h1>

                <div className="selectBox">
	            	<Select
					  autofocus
					  value={this.state.selectValue}
					  options={this.state.options}
					  onChange={this.updateValue.bind(this)}
					/>
	            </div>

            </div>
        )
    }
}




export default City