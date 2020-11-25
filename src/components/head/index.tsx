import React, { useState } from "react";
import logo from "../../assets/logo.jpg";

const Head: React.FunctionComponent = () => {
  const [menus] = useState(["首页", "旅游攻略", "酒店", "国内机票"]);
  return (
    <header>
      <div>
        <div className="logo">
          <img src={logo} />
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
