import React, { useState } from "react";
import logo from "../../assets/logo.jpg";
const styles = require("./style.module.scss");

const Head: React.FunctionComponent = () => {
  const [menus] = useState(["首页", "旅游攻略", "酒店", "国内机票"]);
  return (
    <header>
      <div className={styles["left"]}>
        <div className={styles["logo"]}>
          <img alt="logo" src={logo} />
        </div>
        <nav>
          <ul>
            {menus.map((title) => (
              <li>{title}</li>
            ))}
          </ul>
        </nav>
      </div>
      <div>登录 / 注册</div>
    </header>
  );
};

export default Head;
