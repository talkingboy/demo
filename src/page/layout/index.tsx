import React, { useCallback, useState } from 'react';
import { Button } from 'element-react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import { requestTest, setTest } from '../../redux/actions';
const styles = require('./style.module.scss');

type TProps = {};

const Layout: React.FunctionComponent<TProps> = () => {
  const [value1, setValue] = useState(0);
  // 初始化时缓存映射关系函数
  const mapState = useCallback((state) => {
    return state;
  }, []);
  // 获取state
  const { test, asyncTest } = useMappedState(mapState);
  const dispatch = useDispatch();
  return (
    <>
      {/* <Head></Head> */}
      <div className={styles['test']}>{value1}</div>
      <Button type='primary' onClick={() => setValue(444)}>
        1234
      </Button>
      <div className={styles['test']}>{test}</div>
      <Button type='primary' onClick={() => dispatch(setTest(test + 1))}>
        redux
      </Button>
      <div className='iconfont'>&#xe858;</div>
      <div className={styles['test']}>{asyncTest}</div>
      <Button type='primary' onClick={() => dispatch(requestTest(asyncTest + 1))}>
        redux
      </Button>
    </>
  );
};

export default Layout;
