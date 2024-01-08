// import React from 'react';
import styled from "styled-components";
import { GoCopy } from "react-icons/go";
import { CiSettings } from "react-icons/ci";
import { useRecoilState, useRecoilValue } from "recoil";
import { memoListState, selectNoteBookState } from "../../../store/recoil";
import { v4 } from "uuid";
import { localStorageSetItem } from "./../../../store/noteBook/noteBookSetter";
import { checkEmptyObject } from "./../../../utils/checkEmptyObject";

const RightBtns = () => {
  const selectNoteBook = useRecoilValue(selectNoteBookState);
  const [memoList, setMemoList] = useRecoilState(memoListState);

  const selectNoteBookToAddMemo = () => {
    if (!checkEmptyObject(selectNoteBook)) {
      addMemo();
    }
  };

  const addMemo = () => {
    let newMemoList;
    let existedMemoList = { ...memoList };
    const noteBookId = selectNoteBook.id;

    let addMemo = {
      id: v4(),
      notebook_name: selectNoteBook.name,
      title: "New Note",
      content: "",
      additional_text: "No additional text",
      edited_date: new Date(),
    };

    // 이미 존재하는 Memo가 있으므로 value만 추가
    if (existedMemoList[noteBookId]) {
      let newAddMemo = [];

      existedMemoList[noteBookId].forEach((memo) => {
        newAddMemo.push(memo);
      });
      newAddMemo.push(addMemo);

      existedMemoList[noteBookId] = newAddMemo;
      newMemoList = { ...existedMemoList };
    }
    // 존재하는 Memo가 없으므로 key, value 생성
    else {
      // selectNoteBookId: [{}, {}, {}]
      existedMemoList[noteBookId] = [];
      existedMemoList[noteBookId].push(addMemo);

      newMemoList = { ...existedMemoList };
    }

    saveLocalStorage(newMemoList);
  };

  const saveLocalStorage = (memoList) => {
    setMemoList(memoList);
    localStorageSetItem("memoList", memoList);
  };

  return (
    <div className="flex justify-around grow">
      <Button onClick={selectNoteBookToAddMemo}>New Note</Button>
      <IconBox>
        <GoCopy
          size={22}
          style={{ transform: "translateY(2px)", color: "#777" }}
        />
      </IconBox>
      <IconBox>
        <CiSettings size={26} />
      </IconBox>
    </div>
  );
};

export default RightBtns;

const IconBox = styled.div`
  cursor: pointer;
  font-size: 1rem;
  padding-top: 4px;
`;

export const Button = styled.button`
  background: #0078c5;
  color: #fff;
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 4px;

  &:hover {
    background: #0062a1;
    transition: 0.1s;
  }
`;
