import React, { Component } from 'react';
import {createStore, combineReducers} from 'Redux';



import counter from '../reducers/reducer.js';


/**
 * 状态容器三个核心方法：
 * subscribe用于监听事件，每当dispatch的时候会执行
 * dispatch用于分发action，这是改变状态容器中state的唯一途径
 * getState获取当前state
 * 
 * combineReducers用于将多个reducers合并成一个reducer函数
 * 需要注意的是合并之后每个子reducer只能处理状态容器上其对应的那部分状态
 * 比如counter这个reducer就只能修改store.getState().counter上的状态
 */
import { Provider } from 'react-redux'
import {login} from '../actions/userinfo.js'

let store = createStore(combineReducers({counter}));


//subscribe用于监听事件，每当dispatch的时候会执行
store.subscribe(() =>
  console.log('获取当前状态容器：', store.getState())
)


function add(){
	//dispatch用于分发action，这是改变状态容器中state的唯一途径
	store.dispatch({ type: 'INCREMENT' })
}


import {userinfo} from '../actions/userinfo'
import Aem from './A.jsx';


class Page1 extends Component{
	constructor(props){
	     super(props);
	     this.state={
	        
	     }
	 }
 	componentDidMount(){
	}
	render(){
		return (
			<div>
				<div>
					<Provider store={store}>
						<Aem/>
					</Provider>	
				</div>
			</div>
		)
	}
}

export default Page1;