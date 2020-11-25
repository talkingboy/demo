import React from "react";
import { connect } from "react-redux";
import { GlobalState } from "../../redux/state";
import { Dispatch } from "redux";
import { setTestValue } from "../../redux/actions";
import { Button } from "element-react"
import Head from "../../components/head";
const styles = require("./style.module.scss");

type TProps = {
  setTestValue: (value: number) => void; // 默认值
  value: number;
};

const Layout: React.FunctionComponent<TProps> = ({
  setTestValue,
  value,
}: TProps) => {
  return (
    <>
      <Head></Head>
      <div className={styles["test"]}>{value}</div>
      <Button type="primary" onClick={() => setTestValue(444)}>1234</Button>
    </>
  );
};

const stateToProps = (state: GlobalState) => {
  return {
    value: state.value,
  };
};

//3.这里把action里的方法绑定到props上，可以通过Props使用，一般用于修改store里的数据
const dispatchTOProps = (dispatch: Dispatch) => {
  return {
    setTestValue(value: number) {
      //setTestValue方法会通过dispatch触发reducer.js里的修改方法
      dispatch(setTestValue(value));
    },
  };
};

export default connect(stateToProps, dispatchTOProps)(Layout);
