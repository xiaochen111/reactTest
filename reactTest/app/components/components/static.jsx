import React, { Component } from 'react';


// 面包屑导航
class Crumbs extends Component {
    render() {
        return (
    		<div className="port_top">
            	<img src={require('../../images/port.png')} />当前位置 : <a href="#/bodyBox">首页</a> > <a>{this.props.name}</a>
            </div>
        )
    }
}


class Page extends Component {
	render(){
		return(
			<div className="page">
				<ul>
					<li>上一页</li>
					<li>下一页</li>
				</ul>
			</div>
		)
	}
}


class Loading extends Component{
	render(){
		return(
			<div id="loadingToast" style={{display:"none",height:"100%", width:"100%", position: "fixed", left: 0, top: 0, zIndex: 2000}} >
		        <div id="toastMask" style={{height: "100%",width:"100%", backgroundColor: "#000000", filter: "alpha(opacity=50)", opacity:" .5"}}></div>
		        <div id="toastParent" style={{height: "100%", width:"100%",position: "absolute", left: 0, top: 0,  display: "table",}} >
		            <div style={{display: "table-cell", verticalAlign: "middle",}}>
		                <div  style={{width: "160px",backgroundColor:"#000000", color:"#ffffff", margin:"0px auto",textAlign: "center",padding: "30px", borderRadius:"10px"}}>
		                       <ion-spinner icon="bubbles" className="spinner-light"></ion-spinner>
		                       <img src={require('../../images/loading.gif')} style={{width: "50px",height:"50px"}}/>
		                       <p id="toastContent" style={{marginTop: "20px"}}>Loading...</p>
		                </div>
		            </div>
		         </div>
		    </div>
		)
	}
}

export {Crumbs,Page,Loading}
