import React, { Component } from 'react';
import {commonStorage} from '../../../tool/tool.js'

class Login extends Component{
	login(){
		commonStorage.setValueSession("name","会员中心")
	}
	render(){
		return (
			<div className="container">
				<div className="login">
					<h3 className="tit_login">登录</h3>
					<div className="ipt_lab">
						<label>用户名：</label>
						<input type="text" placeholder="请输入用户名"/>
					</div>
					<div className="ipt_lab">
						<label>密码：</label>
						<input type="password" placeholder="请输入密码"/>
					</div>
					<div className="btn_login">
						<a href="#/Member" onClick={this.login}>登录</a>
					</div>
					<div className="btns_tt">
						<a className="fl">忘记密码</a>
						<a href="#/bodyBox" className="fr">返回首页</a>
					</div>
				</div>
			</div>
		)
	}
}

export default Login;