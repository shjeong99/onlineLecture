import { v4 as uuidv4 } from "uuid"; // UUID 임포트
// firebase.js에서 db를 import
import { db } from "../../src/firebase";
// firestore의 메서드 import
import { setDoc, addDoc, collection, doc, getDoc } from "firebase/firestore";

import React from "react";
import { useEffect, useState, useRef } from "react";
import { Flex, Input, Button, Form, message } from "antd";
import { Typography } from "antd";

const { TextArea } = Input;

const onChange = (e) => {
  console.log("Change:", e.target.value);
};

const LectureReg = function () {
  const [messageApi, contextHolder] = message.useMessage();
  const lessonNumRef = useRef(null); // 학습차시 작성한 내용
  const titleRef = useRef(null); // 강의제목 작성한 내용
  const goalRef = useRef(null); // 학습목표 작성한 내용
  const contentsRef = useRef(null); // 강의내용 작성한 내용

  const [postList, setPostList] = useState([]);
  //db 가져오기
  async function getPostList() {
    const docRef = doc(db, "Lecture", "posts");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      let dbArray = docSnap.data();
      console.log(dbArray.postList);
      setPostList(dbArray.postList);
    }
  }

  // 최초 마운트 시에 getTest import
  useEffect(() => {
    getPostList();
  }, []);

  const setDocs = async (newPost) => {
    const newPostList = [...postList, newPost];
    console.log(newPostList);
    await setDoc(doc(db, "Lecture", "posts"), {
      postList: newPostList,
    })
      .then(() => {
        console.log("문서가 성공적으로 추가되었습니다.");
      })
      .catch((error) => {
        console.error("문서 추가 중 오류 발생:", error);
      });
  };

  const LectureSubmit = function () {
    const lessonNumVal = lessonNumRef.current.input.value;
    const titleVal = titleRef.current.input.value;
    const goalVal = goalRef.current.input.value;
    const contentsVal = contentsRef.current.resizableTextArea.textArea.value;

    if (lessonNumVal.length < 2) {
      messageApi.open({
        type: "error",
        content: "학습 차시를 2자 이상 입력해주세요.",
      });
      return;
    }

    if (titleVal.length < 2) {
      messageApi.open({
        type: "error",
        content: "강의 제목을 2자 이상 입력해주세요.",
      });
      return;
    }

    if (goalVal.length < 2) {
      messageApi.open({
        type: "error",
        content: "학습 목표를 2자 이상 입력해주세요.",
      });
      return;
    }

    if (contentsVal.length < 2) {
      messageApi.open({
        type: "error",
        content: "내용을 2자 이상 입력해주세요.",
      });
      return;
    }

    const randomId = uuidv4(); // 랜덤 ID 생성
    const newPost = {
      title: titleVal,
      lessonNum: lessonNumVal,
      contents: contentsVal,
      postPk: randomId,
      authorId: "teacher1",
      goal: goalVal,
    };

    setDocs(newPost); //게시글 리스트 추가
  };

  return (
    <>
      <>{contextHolder}</>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Flex vertical gap={32} align="center" style={{ width: "1000px" }}>
          <Form
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={(values) => console.log(values)}
          >
            <Form.Item
              style={{ width: "1000px" }}
              label={<span style={{ fontSize: "15px" }}>학습 차시</span>} // 인라인 스타일 적용
              name="차시"
            >
              <Input
                ref={lessonNumRef}
                showCount
                maxLength={10}
                onChange={onChange}
                placeholder="학습 차시를 입력해주세요"
                style={{
                  height: 40,
                }}
              />
            </Form.Item>

            <Form.Item
              style={{ width: "1000px" }}
              label={<span style={{ fontSize: "15px" }}>강의 제목</span>} // 인라인 스타일 적용
              name="제목"
            >
              <Input
                ref={titleRef}
                showCount
                maxLength={20}
                onChange={onChange}
                placeholder="제목을 입력해주세요"
                style={{
                  height: 50,
                }}
              />
            </Form.Item>

            <Form.Item
              style={{ width: "1000px" }}
              label={<span style={{ fontSize: "15px" }}>학습 목표</span>} // 인라인 스타일 적용
              name="학습 목표"
            >
              <Input
                ref={goalRef}
                showCount
                maxLength={20}
                onChange={onChange}
                placeholder="학습 목표를 입력해주세요"
                style={{
                  height: 50,
                }}
              />
            </Form.Item>

            <Form.Item>
              <Form.Item
                style={{ width: "1000px" }}
                label={<span style={{ fontSize: "15px" }}>내용</span>}
                name="내용"
              >
                <TextArea
                  ref={contentsRef}
                  showCount
                  maxLength={3000}
                  onChange={onChange}
                  placeholder="내용을 입력해주세요"
                  style={{
                    height: 300,
                    resize: "none",
                  }}
                />
              </Form.Item>
            </Form.Item>
          </Form>
        </Flex>
      </div>
      <Flex gap="small" justify="flex-end" align="center" vertical>
        <Button onClick={LectureSubmit}>강의등록</Button>
        {/* <Button disabled>Default(disabled)</Button> */}
      </Flex>
    </>
  );
};

export default LectureReg;
