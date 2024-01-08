import React, { useMemo, useState, useEffect } from "react";
import { useRecoilCallback, useRecoilState, useRecoilValue } from "recoil";
import {
  memoListState,
  memoListSetter,
  selectMemoState,
  selectNoteBookState,
} from "../../../store/recoil";
import { SlInfo } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { OnChangePlugin } from "./OnChangePlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { getMemoTitle } from "./../../../utils/getTitle";
import { localStorageSetItem } from "./../../../store/noteBook/noteBookSetter";

const TextEditor = () => {
  const selectNoteBook = useRecoilValue(selectNoteBookState);
  const [selectMemo, setSelectMemo] = useRecoilState(selectMemoState);
  const [memoList, setMemoList] = useRecoilState(memoListState);
  // const [textValue, setTextValue] = useState(selectMemo?.content | "");

  const updateMemo = useRecoilCallback(({ set }) => (text_arr) => {
    {
      set(memoListSetter, () => {
        let AllMemoList = { ...memoList };
        let existedMemoList = [...memoList[selectNoteBook.id]];
        let title = getMemoTitle(text_arr);

        let nowMemo = existedMemoList.find((memo) => memo.id === selectMemo.id);
        nowMemo = {
          ...nowMemo,
          content: text_arr,
          title: title,
        };

        existedMemoList = existedMemoList.filter(
          (item) => item.id !== selectMemo.id
        );
        existedMemoList.push(nowMemo);

        AllMemoList[selectNoteBook.id] = existedMemoList;

        setSelectMemo(nowMemo);
        localStorageSetItem("memoList", AllMemoList);

        return AllMemoList;
      });
    }
  });

  const CustomContent = useMemo(() => {
    return (
      <ContentEditable
        style={{
          position: "relative",
          borderRadius: "5px",
          maxWidth: "100%",
          minHeight: "100%",
          textAlign: "left",
          outline: "none",
          caretColor: "blue",
          fontWeight: "600",
          fontSize: "20px",
        }}
      />
    );
  }, []);

  const CustomPlaceholder = useMemo(() => {
    return (
      <div
        style={{
          position: "absolute",
          top: "11.5%",
          color: "lightgray",
          fontSize: "14px",
        }}
      >
        Type / for menu or{" "}
        <span className="text-gray-400 font-bold underline cursor-pointer">
          select from Templates
        </span>
      </div>
    );
  }, []);

  const initialConfig = {
    namespace: "Text Editor",
    onError: (e) => {
      console.log("ERROR:", e);
    },
  };

  return (
    <div className="h-[100%]">
      <div className="h-[calc(100vh-93px)] p-7">
        {/* text Editor */}
        <LexicalComposer
          initialConfig={initialConfig}
          style={{ position: "relative" }}
        >
          <PlainTextPlugin
            contentEditable={CustomContent}
            placeholder={CustomPlaceholder}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          {/* <MyCustomAutoFocusPlugin /> */}
          <OnChangePlugin updateMemo={updateMemo} />
        </LexicalComposer>
      </div>
      <TextEditBottom>
        <span>
          <span>{selectNoteBook.name}</span>
          <IoMdClose
            size={16}
            color="gray"
            style={{ transform: "translateX(-3px)", cursor: "pointer" }}
          />
        </span>
        <IconBox>
          <span className="bg-">Aa</span>
          <SlInfo
            color="gray"
            style={{ transform: "translateY(50%)", cursor: "pointer" }}
          />
        </IconBox>
      </TextEditBottom>
    </div>
  );
};

export default React.memo(TextEditor);

export const IconBox = styled.div`
  display: flex;
  gap: 1rem;

  span {
    background-color: #e4f2fe !important;
    color: #0078c5;
    font-size: 18px !important;
    padding: 0 2px;
    cursor: pointer;
  }
`;

export const TextEditBottom = styled.div`
  height: 40px;
  background: #fff;
  border-top: 1px solid #ececec;
  text-align: left;
  display: flex;
  justify-content: space-between;
  padding: 5px 16px;
  transform: translateY(5px);
  z-index: 0;

  span {
    display: flex;
    background: rgb(240, 240, 240);
    border-radius: 4px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      padding: 4px 8px;
    }
  }
`;
