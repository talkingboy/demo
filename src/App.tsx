import './App.css';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Layout from './page/layout';
import Page404 from './page/page404';

const App: React.FunctionComponent = () => {
	return (
		<BrowserRouter>
			{/* switch只显示第一次匹配到的页面，如不使用switch则会显示所有匹配到的页面 */}
			<Switch>
				{/* component和render：使用compoinent引用组件会在组件没有变化的时候不重新渲染组件，而render则会重新渲染 */}
				<Route path='/' exact component={() => <Layout></Layout>}></Route>
				<Route path='/page404' exact component={() => <Page404></Page404>}></Route>
				<Redirect from='/*' to='/page404'></Redirect>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
