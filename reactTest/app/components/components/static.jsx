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

export {Crumbs}
