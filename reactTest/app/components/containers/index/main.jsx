import React, { Component } from 'react';
import Contbox from './bodyBox.jsx';
import Tab from './tabContent.jsx';
import Model from '../../components/model.jsx';
import {commonStorage} from '../../../tool/tool.js';



class Mainindex extends Component{
	componentDidMount(){
		commonStorage.setValueSession("first","first");
		document.title = '首页';
	}
	render(){
		let first = commonStorage.getValueSession("first");
		return (
			<div id="indexMain">
				<Contbox/>
				<Tab/>
				{!first?<Model show={true}/>:null}
			</div>
		)
	}
}


export default Mainindex;