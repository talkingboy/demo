// http://157.122.54.189:9095/
import Axios from 'axios';

const axios = Axios.create({
	baseURL: 'http://157.122.54.189:9095/',
	timeout: 1000,
});

export default axios;
