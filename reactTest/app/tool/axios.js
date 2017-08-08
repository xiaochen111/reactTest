import axios from 'axios';

// axios.defaults.baseURL = 'http://192.168.1.129:8088/shining_services/';
// axios.defaults.baseURL = 'http://120.55.90.172:9090/cargoAideThr/'
axios.defaults.baseURL = 'http://192.168.1.129:8080/cargoAideThr/';
axios.defaults.headers.common['Authorization'] = "AUTH_TOKEN";
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


let httpAxios = function(url,params={},callback){
	axios({
		url,
		method: 'post',
		responseType: 'json',
		params,
	}).then(function(res){
		callback(res.data)
	})
}

export default httpAxios;