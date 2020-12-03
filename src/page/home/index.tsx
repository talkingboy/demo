import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { TState } from "../../redux/state";
import { Button } from "element-react";
const styles = require("./style.module.scss");

type TProps = { demoTest: number; setTest: (val: number) => void };

class Home extends React.Component<TProps> {
  onHandleClick = () => {
    this.props.setTest(this.props.demoTest);
  };
  render() {
    return (
      <>
        <div className={styles["home"]}>{this.props.demoTest}</div>
        <Button type="primary" onClick={() => this.onHandleClick()}>
          click
        </Button>
      </>
    );
  }
}

const mapStateToProps = (state: TState) => {
  return {
    demoTest: state.test,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setTest(val: number) {
      dispatch({ type: "setTest", payload: val + 1 });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
