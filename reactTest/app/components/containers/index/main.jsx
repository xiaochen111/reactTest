import React, { Component } from 'react';
import Contbox from './bodyBox.jsx';
import Tab from './tabContent.jsx';
import Model from '../../components/model.jsx';
import {commonStorage} from '../../../tool/tool.js';
import Banner from './banner_ser.jsx';


import './index.less';



class Mainindex extends Component{
	componentDidMount(){
		commonStorage.setValueSession("first","first");
		document.title = '首页';
	}
	render(){
		let first = commonStorage.getValueSession("first");
		return (
			<div id="indexMain">
				<Banner/>
				<Contbox/>
				<Tab/>
				{!first?<Model show={true}/>:null}
			</div>
		)
	}
}


export default Mainindex;