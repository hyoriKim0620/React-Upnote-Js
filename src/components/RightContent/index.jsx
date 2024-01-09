// import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  memoListState,
  // selectMemoState,
  selectNoteBookState,
  showNoteBookListState,
} from "../../store/recoil";
import NoteBooks from "../RightContent/NoteBooks/NoteBooks";
import { getNoteBookIdByMemo } from "../../utils/getNoteBookIdByMemo";
import { useEffect, useState } from "react";
import MemoList from "./Memo/memoList";
import TextEditor from "./TextEditor/TextEditor";
import { EmptyContent } from "./NoteBooks/NoteBooks.styles";
import { ImageEmptyMemo } from "./index.styles";
import { localStorageSetItem } from "../../store/noteBook/noteBookSetter";
import { v4 } from "uuid";

const RightContent = () => {
  const showNoteBookList = useRecoilValue(showNoteBookListState);
  const selectNoteBook = useRecoilValue(selectNoteBookState);
  const [memoList, setMemoList] = useRecoilState(memoListState);
  const [memo, setMemo] = useState([]);

  useEffect(() => {
    const memo = getNoteBookIdByMemo(memoList, selectNoteBook.id);
    setMemo(memo);

    // if (selectMemo) {
    //   if (selectMemo.content && selectMemo.content.length > 0) {
    //     console.log("selectMemo.content");

    //     const initialElement = document.querySelector(
    //       'div[data-lexical-editor="true"]'
    //     );

    //     if (initialElement) {
    //       initialElement.innerHTML = `<span data-lexical-text="true"></span>`;
    //     }
    //   }
    // }
  }, [memoList, selectNoteBook]);

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
    if (memo.length > 0) {
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

  // NOTEBOOKS Click
  if (showNoteBookList) {
    return (
      <div className="w-full">
        <NoteBooks />
      </div>
    );
  }
  // 특정 NoteBook 클릭 시
  else if (selectNoteBook) {
    if (memo.length > 0) {
      return (
        <div className="w-full flex z-10">
          <div className="w-[17%] h-full">
            <MemoList
              selectNoteBook={selectNoteBook}
              memoList={memoList}
              memo={memo}
            />
          </div>
          <div className="flex-1 z-0">
            <TextEditor />
          </div>
        </div>
      );
    } else {
      return (
        <EmptyContent>
          <ImageEmptyMemo
            $img_url={selectNoteBook?.image?.image_url}
          ></ImageEmptyMemo>
          <p className="mt-2">
            Have a thought to jot down? Tap on the button below.
          </p>
          <p onClick={addMemo}>New Note</p>
        </EmptyContent>
      );
    }
  }
};

export default RightContent;
