import React, { useState } from 'react';
import { Button } from 'element-react';
const styles = require('./style.module.scss');

type TProps = {};

const Layout: React.FunctionComponent<TProps> = () => {
	const [value1, setValue] = useState(0);
	return (
		<>
			{/* <Head></Head> */}
			<div className={styles['test']}>{value1}</div>
			<Button type='primary' onClick={() => setValue(444)}>
				1234
			</Button>
		</>
	);
};

export default Layout;
