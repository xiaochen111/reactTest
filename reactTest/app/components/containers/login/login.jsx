import React, { Component } from 'react';
import {commonStorage} from '../../../tool/tool.js';
import $ from 'jquery';

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
	componentDidMount(){
		$('#login').click(()=>{
			let username = $('#username').val();
			let password = $('#password').val();
			if(!username){
				this.setState({ 
					show: true,
					text:"用户名不能为空!!!", 
				})
				return;
			}
			if(!password){
				this.setState({ 
					show: true,
					text:"密码不能为空!!!", 
				})
				return;
			}

			this.setState({ 
				show: true,
				text:"登录成功!!!", 
			})

			setTimeout(()=>{
				this.setState({ 
					show: false,
				},()=>{
					commonStorage.setValueSession("name","会员中心"); //添加缓存  
					location.hash="#/Member";  //href="#/Member" 页面跳转
				})
			},2000)
			
		})
		
		
	}
	render(){
		return (
			<div className="containers" style={{position:"relative"}}>


				<div className="login">
					<h3 className="tit_login">登录</h3>
					<div className="ipt_lab">
						<label>用户名：</label>
						<input type="text" placeholder="请输入用户名" id="username"/>
					</div>
					<div className="ipt_lab">
						<label>密码：</label>
						<input type="password" placeholder="请输入密码" id="password"/>
					</div>
					<div className="btn_login">
						<a  id='login'>登录</a>
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
			          //showCancelButton
			          onConfirm={() => {
			            console.log('Confirm'); // eslint-disable-line no-console
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