import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Divider, Table } from "antd";
import { Button, Flex } from "antd";

const columns = [
  {
    title: "차시",
    dataIndex: "lecNum",
    align: "center",
  },
  {
    title: "강의명",
    dataIndex: "lecName",
    align: "center",
  },
  {
    title: "학습목표",
    dataIndex: "lecTodo",
    align: "center",
  },
  {
    title: "강의시간",
    dataIndex: "lecTime",
    align: "center",
  },
];
const data = [
  {
    key: "1",
    lecNum: "OT",
    lecName: "Orientation",
    lecTodo: "강좌 소개 및 강좌 커리큘럼 안내",
    lecTime: "02:42",
  },
  {
    key: "2",
    lecNum: "사전강의1",
    lecName: "히라가나 part1",
    lecTodo: "히라가나 50음도를 학습한다",
    lecTime: "24:55",
  },
  {
    key: "3",
    lecNum: "사전강의2",
    lecName: "히라가나 part2",
    lecTodo: "히라가나 탁음과 반탁음을 학습한다",
    lecTime: "22:55",
  },
  {
    key: "4",
    lecNum: "사전강의3",
    lecName: "인사하기",
    lecTodo: "8가지 상황의 기본 일본어 인사말을 학습한다",
    lecTime: "14:13",
  },
  {
    key: "5",
    lecNum: "사전강의4",
    lecName: "지시어",
    lecTodo: "이, 그, 저, 어느에 해당하는 지시어를 학습한다",
    lecTime: "11:27",
  },
  {
    key: "6",
    lecNum: "1강",
    lecName: "만능 재주꾼",
    lecTodo: "[명사 + です] 표현을 학습한다",
    lecTime: "31:24",
  },
  {
    key: "7",
    lecNum: "2강",
    lecName: "모두가 '예'할 때",
    lecTodo: "[명사 + じゃありません] 표현을 학습한다",
    lecTime: "28:10",
  },
  {
    key: "8",
    lecNum: "3강",
    lecName: "내가 바라는 그것",
    lecTodo: "[명사 + ください] 표현을 학습한다",
    lecTime: "26:30",
  },
  {
    key: "9",
    lecNum: "4강",
    lecName: "궁금한 건 못참아!",
    lecTodo: "[명사 + は + 명사 +ですか] 표현을 학습한다",
    lecTime: "27:17",
  },
];
const Lecture = () => {
  const navigate = useNavigate();

  const moveReg = function () {
    navigate("Reg");
  };

  return (
    <>
      <Divider>일본어 왕초보 강의구성</Divider>
      <Table
        columns={columns}
        dataSource={data}
        size="middle"
        pagination={{ position: ["bottomCenter"] }}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              navigate("Detail", {
                state: { message: "값을 전달받음" },
              });
              // alert(record.key);
            }, // click row
          };
        }}
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
          <Button onClick={moveReg}>강의등록</Button>
          {/* <Button disabled>Default(disabled)</Button> */}
        </Flex>
      </div>
    </>
  );
};
export default Lecture;
