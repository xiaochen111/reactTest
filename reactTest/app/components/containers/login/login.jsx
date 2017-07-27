import React, { Component } from 'react';
import {commonStorage} from '../../../tool/tool.js';

import SweetAlert from 'sweetalert-react'; 
import 'sweetalert/dist/sweetalert.css';



class Login extends Component{
	constructor(props){
	     super(props);
	     this.state={
	        show: false,
	        title:"提示",
	        text:"真的要登录吗？"
	     }
	}
	login(){
		// commonStorage.setValueSession("name","会员中心")
		this.setState({ 
			show: true,
			title:"提示!!!", 
		})
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
						<a  onClick={this.login.bind(this)}>登录</a>
					</div>
					<div className="btns_tt">
						<a className="fl">忘记密码</a>
						<a href="#/bodyBox" className="fr">返回首页</a>
					</div>
				</div>






				<SweetAlert
			          show={this.state.show}
			          title={this.state.title}
			          text={this.state.text}
			          showCancelButton
			          onConfirm={() => {
			            console.log('Confirm'); // eslint-disable-line no-console
			            commonStorage.setValueSession("name","会员中心"); //添加缓存  
			            location.hash="#/Member";  //href="#/Member" 页面跳转
			            this.setState({ show: false });
			          }}
			          onCancel={() => {
			            console.log('cancel'); // eslint-disable-line no-console
			            this.setState({ show: false });
			          }}
			          onClose={() => console.log('close')} />
			</div>
		)
	}
}

export default Login;