import React, { Component } from 'react';
import { Button,Pagination,Modal,OverlayTrigger,Tooltip} from 'react-bootstrap';

class Model extends Component{
	constructor(props){
	     super(props);
	     console.log(props)
	     this.state={
	        showModal: props.show,
	     }
	}
	close() {
	    this.setState({ showModal: !this.props.show });
	}
	open() {
	    this.setState({ showModal: this.props.show });
	}
	componentWillReceiveProps(newProps) {  //当挂载的组件接收到新的props时被调用。此方法应该被用于比较this.props 和 nextProps以用于使用this.setState()执行状态转换。
	    console.log(newProps, this.state.showModal);
	    this.setState({
	    	showModal:newProps.show
	    })
	}
	render(){
		return (
			<Modal show={this.state.showModal} onHide={this.close.bind(this)}>
	          <Modal.Header closeButton>
	            <Modal.Title>Modal heading</Modal.Title>
	          </Modal.Header>
	          <Modal.Body>
	            <div>我是主题内容！！！！</div>
	          </Modal.Body>
	          <Modal.Footer>
	            <Button onClick={this.close.bind(this)}>Close</Button>
	          </Modal.Footer>
	       </Modal>
		)
	}
}

export default Model;