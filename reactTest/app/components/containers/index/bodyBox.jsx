import React, { Component } from 'react';
import ajax from '../../../tool/tool'



class Contbox extends Component {
	componentDidMount(){
		
		ajax("freightlclweb/queryPage","",function(data){
			console.log(data);
		})

		console.log("加载完了")
	}
    render() {
    	let arr = ['你好','hello','阿波'];
    	//let card = new Array(8);
    	//card.fill(<Card />);
    	let card = [
			{name:"上海1",href:"#/Search"},{name:"上海2",href:"#/Search"},{name:"上海3",href:"#/Search"},{name:"上海4",href:"#/Search"},
			{name:"上海5",href:"#/Search"},{name:"上海6",href:"#/Search"},{name:"上海7",href:"#/Search"},{name:"上海8",href:"#/Search"}
		]
        return (
        	<div className="containerss card_tb">
        		{
        			card.map((item,index)=><div className="card" key={index}><Card name={item.name} href={item.href}/></div>)
        		}
        	</div>
        )
    }
}

class Card extends Component{
	// constructor(){

	// }
	btnClick(url){
		// console.log(this)
		// let btn = this.refs.btn;  //ref 此处可以进行dom操作
		// let url = btn.href;
		location.hash=url;
	}
	
	render(){
		return(
			<div>
				<p>{this.props.name} —— Singapore</p>
				<p>2017.3.25 —— 2017.3.31</p>
				<ul>
					<li>$3000</li>          
					<li>$6000</li>
					<li>$6000</li>
				</ul>
				<button ref="btn" href={this.props.href} onClick={this.btnClick.bind(this,this.props.href)}>咨询</button>
			</div>
		)
	}
}

export default Contbox;