import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import Lecture from "./Lecture.jsx";
import QnA from "./QnA.jsx";
import { useState } from "react";
import LectureDetail from "./LectureDetail.jsx";
import LectureReg from "./LectureReg.jsx";

const { Header, Content, Footer } = Layout;

function getItem(label, key) {
  return {
    label,
    key,
  };
}

const items = [
  getItem(<Link to="">홈</Link>, "1"),
  getItem(<Link to="Lecture">강의목록</Link>, "2"),
  getItem(<Link to="QnA">Q&A</Link>, "3"),
];

const Main = () => {
  const size = {
    width: window.innerWidth || document.body.clientWidth,
    height: window.innerHeight || document.body.clientHeight,
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedMenu, setSelectedMenu] = useState({
    key: 1,
    name: items.find((val) => val.key === "1").label,
  });

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
          onClick={(e) => {
            setSelectedMenu({ key: e.key, name: e.domEvent.target.innerText });
          }}
        />
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        {/* <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          style={{
            padding: 24,
            minHeight: size.height - 120,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Lecture" element={<Lecture />} />
            <Route path="/QnA" element={<QnA />} />
            <Route path="/Lecture/Detail/*" element={<LectureDetail />} />
            <Route path="/Lecture/Reg" element={<LectureReg />} />
          </Routes>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default Main;
