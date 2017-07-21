import React, { Component } from 'react';
import {commonStorage} from '../../../tool/tool.js'

class Login extends Component{
	login(){
		commonStorage.setValueSession("name","会员中心")
	}
	render(){
		return (
			<div className="container">
				<h1><a href="#/bodyBox">登录页面</a></h1>
				<h1><a href="#/Member" onClick={this.login}>登录</a></h1>
			</div>
		)
	}
}

export default Login;