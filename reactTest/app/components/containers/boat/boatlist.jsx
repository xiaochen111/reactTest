import React, { Component } from 'react';

class Listone extends Component{
	render(){
		return(
			<div className="tableList">
				<div className="listBox">
		    		<h2 className="titList">THALASSA NIKI (9665645) / 0943-017W</h2>
		    		<ul className="ulbox">
		    			<li className="li_1">
		    				<p>
		    					<sapn><img src={require('../../../images/AAL.png')} alt="" /></sapn>
		    					<br/>
		    					<span><a>HEUNG-A</a>  <i>共舱</i></span>
		    				</p>
		    			</li>
		    			<li className="li_2">
		    				<p>
		    					<span>出发日期</span>
			    				<br/>
			    				<span className="fw">2017.08.14（周四）</span>
			    				<br/>
			    				<span>shanghai，shanghai，china(cnsha)</span>
		    				</p>
		    			</li>
		    			<li className="li_3">
		    				<p>
		    					<span>航程</span>
		    					<br />
		    					<span className="day">22天</span>
		    				</p>
		    			</li>
		    			<li className="li_4">
		    				<p>
		    					<span>到达日期</span>
			    				<br/>
			    				<span className="fw">2017.08.14（周四）</span>
			    				<br/>
			    				<span>shanghai，shanghai，china(cnsha)</span>
		    				</p>
		    			</li>
		    		</ul>
		    	</div>
			</div>
		)
	}
}

class Listtwo extends Component{
	render(){
		return(
    		<ul className="list">
    			<li className="li_1">APL</li>
    			<li className="li_2">THALASSA PISTIS</li>
    			<li className="li_3">724W</li>
    			<li className="li_4">22-Jun-2017 (Thu)</li>
    			<li className="li_5">30</li>
    			<li className="li_6">22-Jun-2017 (Thu)</li>
    			<li className="li_7">
    				<p>
    					<span>SHANGHAI, SHANGHAI, </span>
    					<br />
    					<span>CHINA (CNSHA)</span>
    				</p>
    			</li>
    			<li className="li_8">
    				<p>
    					<span>SHANGHAI, SHANGHAI, </span>
    					<br />
    					<span>CHINA (CNSHA)</span>
    				</p>
    			</li>
    		</ul>
		)
	}
}

export {Listone,Listtwo}