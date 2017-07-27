import React, { Component } from 'react';
import {Crumbs} from '../components/static.jsx';
import SweetAlert from 'sweetalert-react'; 
import 'sweetalert/dist/sweetalert.css';
import { Button,Pagination,Modal,OverlayTrigger,Tooltip} from 'react-bootstrap';


class Test extends Component{
	constructor(props){
	     super(props);
	     this.state={
	        show: false,
	        showModal: false,
	        activePage: 1,
	        title:"demo",
	        text:"自己想复杂了，其实挺简单！！！"
	     }
	}
	btnClick(){
		this.setState({ show: true })
	}
	handleSelect(eventKey) {
		console.log(eventKey)
	    this.setState({
	      activePage: eventKey
	    });
	}
	close() {
	    this.setState({ showModal: false });
	}
	open() {
	    this.setState({ showModal: true });
	}
	render(){
		const tooltip = (
		  <Tooltip id="tooltip">我是提示出来的内容</Tooltip>
		);
		return (
			<div>
				<Crumbs name="test"/>

				<div id="test">
					<div><button className="alertBtn" onClick={this.btnClick.bind(this)}>Alert</button></div>
					
					<div className="clearfix" style={{marginTop:"50px"}}></div>
					<div><Button onClick={this.open.bind(this)}>模态框</Button></div>
					

					<div className="clearfix" style={{marginTop:"20px"}}></div>
					<OverlayTrigger placement="right" overlay={tooltip}>
						<Button bsStyle="default">Holy guacamole!</Button>
					</OverlayTrigger>

					<OverlayTrigger placement="right" overlay={tooltip} >
						<button className="alertBtn" onClick={this.btnClick.bind(this)} style={{marginRop:"20px"}}>Alert1</button>
					</OverlayTrigger>
					

					<div>
						<Pagination
				          bsSize="medium"
				          items={10}
				          activePage={this.state.activePage}
				          onSelect={this.handleSelect.bind(this)} />
					</div>


					<div>
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
					</div>
				</div>



				{/*sweetalert demo*/}
				<SweetAlert
			          show={this.state.show}
			          title={this.state.title}
			          text={this.state.text}

			          type="input"
			          inputType="password"
			          inputPlaceholder="password"

			          showCancelButton
			          onConfirm={(inputValues ) => {
			            console.log(inputValues ); // eslint-disable-line no-console
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


export default Test;