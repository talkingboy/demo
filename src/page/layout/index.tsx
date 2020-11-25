import React from 'react';
import { connect } from 'react-redux';
import { GlobalState } from '../../redux/state';

const styles = require('./style.module.scss');

type TProps = {
	setTestValue: (value: number) => void;
	value: number;
};

const Layout: React.FunctionComponent<TProps> = ({ setTestValue, value }: TProps) => {
	return (
		<>
			<div className={styles['test']}>{value}</div>
			<div onClick={() => setTestValue(444)}>1234</div>
		</>
	);
};

const stateToProps = (state: GlobalState) => {
	return {
		value: state.value,
	};
};

//3.这里把action里的方法绑定到props上，可以通过Props使用，一般用于修改store里的数据
const dispatchTOProps = (dispatch: (arg0: { type: string; value?: any }) => void) => {
	return {
		setTestValue(value: number) {
			//setTestValue方法会通过dispatch触发reducer.js里的修改方法
			dispatch({ type: 'setTestValue', value });
		},
	};
};

export default connect(stateToProps, dispatchTOProps)(Layout);
