import React from "react";
import japanImg from "../Img/japanLogo.png";
import { Divider } from "antd";

const Home = () => {
  return (
    <>
      <Divider>지금 사야 싸다! 특정 기간 할인, 일본어 올킬 패키지!</Divider>
      <div style={{ textAlign: "center" }}>
        <img src={japanImg}></img>
      </div>
    </>
  );
};

export default Home;
