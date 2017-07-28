import React, { Component } from 'react';
import { Link } from 'react-router';
import {commonStorage} from '../../tool/tool.js';
import Dibu from '../footer/footer.jsx'


class App extends Component {
	
    render() {
    	let col = {
			color:"#fff"
		}
        return (
        	<div>
        		<div id='main'>  {/*id=main 这层div是为了foot一直在下面  样式问题*/}

	        		<div className="topNav">
			            <div className="containers">
			                <div className="fl"><Link to="/bodyBox" style={col}>logo</Link></div>
			                <div className="fr">
			                	<Topul/>
			                </div>
			            </div>
		            </div>

		            <div className="containers"> {/*中间渲染内容*/}
						{this.props.children}
					</div>

				</div>

				<Dibu/> {/*底部*/}
        	</div>
        )
    }
}

class Topul extends Component{
	constructor(props){
	     super(props);
	     this.state={
	        name:"登录"
	     }
	}

	login(){
		var name = commonStorage.getValueSession("name");
		console.log("name==="+name);
		if(!name){
			location.hash="#/Login"
		}else{
			location.hash="#/Member";
		}
	}
	componentDidMount(){
		var name = commonStorage.getValueSession("name");
		if(name){
			this.setState({
				name
			})
		}
		
	}
	render(){
		return(
			<div>
				<ul className="t_ul">
					<li><Link to="/bodyBox">菜单一</Link></li>
					<li><Link to="/Search">菜单二</Link></li>
					<li><Link to="/City">菜单三</Link></li>
					<li><Link to="/Test">测试</Link></li>
					<li><Link onClick={this.login.bind(this)}>{this.state.name}</Link></li>
				</ul>
			</div>
		)
	}
}






export {App} ;