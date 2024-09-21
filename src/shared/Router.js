import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

// Router 라는 함수를 만들고 아래와 같이 작성
const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="works/:id" element={<Work />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
