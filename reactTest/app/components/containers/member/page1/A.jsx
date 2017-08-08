import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {login} from '../actions/userinfo.js'

class Aem extends Component{
	constructor(props){
		super(props);
		this.state={
			
		}
	}
	componentDidMount(){
		console.log(this.props)
		// this.props.dispatch({ type: 'INCREMENT' })
		//this.props.userinfoActions()
	}
	render(){
		let { state } = this.props;
		return (
			<div className="">
				ffffff
				{"dfdd+"+state}
			</div>
		)
	}
}


function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         userinfoActions: bindActionCreators(login, dispatch)
//     }
// }


export default connect(
    mapStateToProps,
    //mapDispatchToProps
)(Aem)
