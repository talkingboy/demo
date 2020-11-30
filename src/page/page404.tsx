import React from 'react';
import axios from '../apis';

const Page404: React.FunctionComponent = () => {
	const queryCitys = async () => {
		try {
			const resp = await axios.get('cities', { params: { name: '广州' } });
			console.log(resp);
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<>
			<div>404</div>
			<div onClick={() => queryCitys()}>12341234</div>
		</>
	);
};

export default Page404;
