import React, { Component } from 'react';

class Page2 extends Component{
	constructor(props){
	     super(props);
	     this.state={
	        
	     }
	 }
 	componentDidMount(){
		console.log(this.props)
		
	}
	render(){
		return (
			<div>
				page2
			</div>
		)
	}
}

export default Page2;