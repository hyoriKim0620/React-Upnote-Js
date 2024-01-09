// import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  NotebooksName,
  editNoteBookState,
  memoListState,
  noteBookListState,
  selectMemoState,
  selectNoteBookState,
  showCreateNoteBookState,
  showNoteBookListState,
} from "../../../store/recoil";
import {
  EmptyContent,
  NotebooksTitle,
  ToggleButton,
  ToggleContainer,
} from "./NoteBooks.styles";
import { useState } from "react";
import { PiListLight } from "react-icons/pi";
import { LiaBorderAllSolid } from "react-icons/lia";
import { BsPlusLg } from "react-icons/bs";
import { PiBooksThin } from "react-icons/pi";
import SearchInput from "../../Header/searchInput/SearchInput";
import ListOrderNoteBooks from "./orderingNoteBooks/ListOrderNoteBooks";
import ImageOrderNoteBooks from "./orderingNoteBooks/ImageOrderNoteBooks";

const NoteBooks = () => {
  const noteBooksName = useRecoilValue(NotebooksName);
  const noteBookList = useRecoilValue(noteBookListState); // noteBookList
  const [, setEditNoteBook] = useRecoilState(editNoteBookState);
  const [showCreateNoteBook, setShowCreateNoteBook] = useRecoilState(
    showCreateNoteBookState
  );
  const [, setSelectNoteBook] = useRecoilState(selectNoteBookState);
  const [, setShowNoteBookList] = useRecoilState(showNoteBookListState);
  const [, setSelectMemo] = useRecoilState(selectMemoState);
  const memoList = useRecoilValue(memoListState);
  const [checked, setChecked] = useState(true);

  const handleToggle = (value) => {
    setChecked(value);
  };

  const handleShowCreateNoteBook = () => {
    setShowCreateNoteBook(true);
  };

  const handleClick = (e, note) => {
    e.stopPropagation();
    setEditNoteBook(note);
    handleShowCreateNoteBook();
  };

  const handleNoteBookClick = (note) => {
    setSelectNoteBook(note);
    setShowNoteBookList(false);

    const noteMemoList = memoList[note.id];
    if (noteMemoList && noteMemoList.length > 0) {
      setSelectMemo(noteMemoList[0]);
    }
  };

  return (
    <>
      <NotebooksTitle>
        <div>
          <span>
            {!checked && "All"} {noteBooksName}
          </span>

          <span className="text-gray-400">&nbsp;({noteBookList.length})</span>
        </div>
        <div>
          <div>
            <ToggleContainer>
              <ToggleButton
                $left={"left"}
                $checked={checked}
                onClick={() => handleToggle(true)}
              >
                <LiaBorderAllSolid />
              </ToggleButton>
              <ToggleButton
                $right={"right"}
                $checked={checked}
                onClick={() => handleToggle(false)}
              >
                <PiListLight />
              </ToggleButton>
            </ToggleContainer>
          </div>
          <SearchInput width={"200"} />
          <BsPlusLg
            size={18}
            className="right_plus_btn"
            onClick={handleShowCreateNoteBook}
          />
        </div>
      </NotebooksTitle>
      {noteBookList.length > 0 ? (
        <div className="w-full h-[calc(100% - 77px)] ">
          {checked ? (
            <ImageOrderNoteBooks
              noteBookList={noteBookList}
              openEditNoteBook={handleClick}
              handleNoteBookClick={handleNoteBookClick}
            />
          ) : (
            <ListOrderNoteBooks
              noteBookList={noteBookList}
              openEditNoteBook={handleClick}
              handleNoteBookClick={handleNoteBookClick}
            />
          )}
        </div>
      ) : (
        <>
          <EmptyContent>
            <div>
              <PiBooksThin size={50} color="gray" />
            </div>
            <p>You can organize notes of same topic into notebooks.</p>
            <p onClick={handleShowCreateNoteBook}>
              Create New {noteBooksName.toLocaleLowerCase()}
            </p>
          </EmptyContent>
        </>
      )}
    </>
  );
};

export default NoteBooks;
