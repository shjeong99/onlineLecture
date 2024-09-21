import React, { useState } from "react";
import { Divider, Flex, Button, Avatar, List, Radio, Space } from "antd";
const data = [
  {
    title: "1강에서 이게 궁금해요..",
  },
  {
    title: "선생님 덕분에 시험 합격했습니다!",
  },
  {
    title: "단어 잘 외우는 법은 뭔가요?",
  },
  {
    title: "이 문장이 헷갈려요.",
  },
];

const positionOptions = ["top", "bottom", "both"];
const alignOptions = ["start", "center", "end"];

const QnA = () => {
  const [position, setPosition] = useState("bottom");
  const [align, setAlign] = useState("center");
  return (
    <>
      <Divider>
        궁금한 점이 있다면 글을 남겨주세요! 모든지 답변해드립니다.
      </Divider>
      <List
        pagination={{
          position,
          align,
        }}
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description="예시문장 예시문장 예시문장 예시문장 예시문장 예시문장 예시문장 예시문장"
            />
          </List.Item>
        )}
      />
      <div
        className="button-container"
        style={{
          display: "flex",
          justifyContent: "flex-end", // 버튼을 오른쪽으로 정렬
          padding: "10px", // 여백 조정 (선택 사항)
        }}
      >
        <Flex gap="small">
          <Button>질문남기기</Button>
          {/* <Button disabled>Default(disabled)</Button> */}
        </Flex>
      </div>
    </>
  );
};
export default QnA;
