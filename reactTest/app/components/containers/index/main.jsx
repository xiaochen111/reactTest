import React, { Component } from 'react';
import Contbox from './bodyBox.jsx';
import Tab from './tabContent.jsx';



class Mainindex extends Component{
	render(){
		return (
			<div id="indexMain">
				<Contbox/>
				<Tab/>
			</div>
		)
	}
}


export default Mainindex;