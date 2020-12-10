

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### react引入ts

1、全局安装ts
npm i -g typescript
2、创建tsconfig.json
tsc --init
修改tsconfig.json，开启jsx和allowJs配置，
3、安装开发环境依赖
npm install --save-dev typescript @types/react @types/react-dom ts-loader
4、修改js文件为ts，修改jsx为tsx
5、增加tsconfig文件配置==>"jsx": "react",
6、根据报错位置的提示信息，修改报错的ts和tsx文件

### react引入router

1.安装路由核心包和web包
npm i -s react-router react-router-dom
2.如果是使用的ts，还需要安装ts相关的包
npm i -s @types/react-router @types/react-router-dom
3.在需要使用路由的地方使用Router，BrowserRouter，HashRouter，当前项目使用的是BrowserRouter，可以查看App.tsx

### 关于node-sass
npm i node-sass 报错时使用以下命令安装即可
npm install --save node-sass --registry=https://registry.npm.taobao.org --disturl=https://npm.taobao.org/dist --sass-binary-site=http://npm.taobao.org/mirrors/node-sass

### 引入element UI
npm i element-react --save

### element UI 默认主题
npm install element-theme-default --save

### 页面按需引入
import { Button } from 'element-react';

### redux引入
1.安装redux以及redux相关的ts解析插件
npm install -S redux react-redux @types/react-redux
2.创建redux/index文件
1).创建store
const store = createStore(reducer);
2).创建reducer
创建redux/reducer文件
```
const reducer = (state: TState = initState, action: AnyAction): TState => {
  switch (action.type) {
    case 'SET_TEST': {
      return { ...state, test: action.payload };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
```
3.在index.tsx中注入store
<Provider store={store}></Provider>
4.在fun组件中使用
```
// 初始化时缓存映射关系函数
const mapState = useCallback((state) => {
  return {
    test: state.test, // 获取 hookData 的 数据
  };
}, []);
// 获取state
const { test } = useMappedState(mapState);
const dispatch = useDispatch();
```
5.在class组件中使用
通过connect函数将dispatch方法和state的状态注入到props中
