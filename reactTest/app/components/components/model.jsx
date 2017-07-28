import React, { Component } from 'react';
import { Button,Pagination,Modal,OverlayTrigger,Tooltip} from 'react-bootstrap';

class Model extends Component{
	constructor(props){
	     super(props);
	     this.state={
	        showModal: true,
	     }
	}
	close() {
	    this.setState({ showModal: false });
	}
	open() {
	    this.setState({ showModal: true });
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