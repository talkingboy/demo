import React, { useCallback, useState } from 'react';
import { Button } from 'element-react';
import { useDispatch, useMappedState } from 'redux-react-hook';
const styles = require('./style.module.scss');

type TProps = {};

const Layout: React.FunctionComponent<TProps> = () => {
  const [value1, setValue] = useState(0);
  // 初始化时缓存映射关系函数
  const mapState = useCallback((state) => {
    return {
      test: state.test, // 获取 hookData 的 数据
    };
  }, []);
  // 获取state
  const { test } = useMappedState(mapState);
  const dispatch = useDispatch();
  return (
    <>
      {/* <Head></Head> */}
      <div className={styles['test']}>{value1}</div>
      <Button type='primary' onClick={() => setValue(444)}>
        1234
      </Button>
      <div className={styles['test']}>{test}</div>
      <Button type='primary' onClick={() => dispatch({ type: 'setTest', payload: test + 1 })}>
        redux
      </Button>
    </>
  );
};

export default Layout;
