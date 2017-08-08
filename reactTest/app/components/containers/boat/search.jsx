import React, { Component } from 'react';
import Choice from '../../components/select.jsx';
import httpAxios from '../../../tool/axios.js';
import DatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style/css';


class Topser extends Component{
      componentDidMount(){
            httpAxios('api/queryDefaultLoadPort','',function(res){
                  console.log(res)
            })
      }
	date(date,dateString){
		console.log(dateString)
	}
	render(){
		return (
			<div className="topSer">
				<Choice width="250px"
				 imgIcon='qi'
                  	 ulWidth="300px" 
                  	 name1="dictValue1" 
                  	 name2="dictValue2" 
                  	 id="dictId" 
                  	 url='api/queryDefaultLoadPort'
                  	 placeholder="起始港" />

                  	<Choice width="250px"
                  	 imgIcon='mu'
                  	 ulWidth="300px" 
                  	 name1="dictValue1" 
                  	 name2="dictValue2" 
                  	 id="dictId" 
                  	 url='api/queryDefaultTargetPort'
                  	 placeholder="目的港" />

                  	<DatePicker onChange={this.date.bind(this)}/>

                        <button>查询</button>
			</div>
		)
	}
}

export default Topser;