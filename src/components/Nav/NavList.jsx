// import React from 'react';
import { TbArrowMoveRight } from "react-icons/tb";
import "./Nav";
import {
  localStorageGetItem,
  localStorageSetItem,
} from "../../store/noteBook/noteBookSetter";
import { useRecoilValue } from "recoil";
import {
  editNoteBookState,
  noteBookListState,
  selectNoteBookState,
  showCreateNoteBookState,
  showNavbarState,
  showNoteBookListState,
} from "./../../store/recoil";
import { useRecoilState } from "recoil";

const NavList = ({ cmd }) => {
  const [noteBookList, setNoteBookList] = useRecoilState(noteBookListState);
  const [, setSelectNoteBook] = useRecoilState(selectNoteBookState);
  const [, setShowNoteBookList] = useRecoilState(showNoteBookListState);
  const [, setShowCreateNoteBook] = useRecoilState(showCreateNoteBookState);
  const [, setEditNoteBook] = useRecoilState(editNoteBookState);
  const showNavbar = useRecoilValue(showNavbarState);
  const selectCmd = showNavbar[cmd];

  const editNoteBook = (e) => {
    e.stopPropagation();

    setEditNoteBook(selectCmd["selectNoteBook"]);
    setShowCreateNoteBook(true);
  };

  const deleteNoteBook = () => {
    let word = selectCmd["selectNoteBook"].name;

    const response = window.confirm(`Delete "${word}"?`);
    if (response) {
      // "확인"
      const noteBookList = deleteNoteBookSetter();

      localStorageSetItem("noteBookList", noteBookList);
      setNoteBookList(noteBookList);
      setSelectNoteBook({});

      setTimeout(() => {
        setShowNoteBookList(true);
      }, 10);
    }
  };

  const deleteNoteBookSetter = () => {
    let cmdId = selectCmd["selectNoteBook"].id;

    let noteBookList = localStorage.getItem("noteBookList")
      ? localStorageGetItem("noteBookList")
      : [];

    noteBookList = noteBookList.filter(({ id }) => id !== cmdId);
    return noteBookList;
  };

  if (cmd === "memo") {
    return (
      <ul className="text-xs">
        <li>
          <TbArrowMoveRight />
          <span>Display</span>
        </li>
        <li>
          <TbArrowMoveRight />
          <span>Sort notes</span>
        </li>
        <li className="border-t-2">
          <TbArrowMoveRight />
          <span>Edit</span>
        </li>
        <li>
          <TbArrowMoveRight />
          <span>New Nested Notebook</span>
        </li>
        <li>
          <TbArrowMoveRight />
          <span>Delete</span>
        </li>
        <li className="border-t-2">
          <TbArrowMoveRight />
          <span>Export</span>
        </li>
      </ul>
    );
  } else if (cmd === "noteBookHeader") {
    return (
      <ul className="text-xs">
        <li>
          <TbArrowMoveRight />
          <span>Display</span>
        </li>
        <li>
          <TbArrowMoveRight />
          <span>Sort notes</span>
        </li>
        <li className="border-t-2" onClick={editNoteBook}>
          <TbArrowMoveRight />
          <span>Edit</span>
        </li>
        <li>
          <TbArrowMoveRight />
          <span>New Nested Notebook</span>
        </li>
        <li onClick={deleteNoteBook}>
          <TbArrowMoveRight />
          <span>Delete</span>
        </li>
        <li className="border-t-2">
          <TbArrowMoveRight />
          <span>Export</span>
        </li>
      </ul>
    );
  } else {
    return (
      <ul className="text-xs">
        <li className="hover:bg-zinc-50" onClick={editNoteBook}>
          <span className="nav_small_span pt-3">Edit</span>
        </li>
        <li>
          <span className="nav_small_span">New Nested Notebook</span>
        </li>
        <li>
          <span className="nav_small_span">Sort notes</span>
        </li>
        <li>
          <span className="nav_small_span">Hide from Sidebar</span>
        </li>
        <li>
          <span className="nav_small_span pb-3">Copy link</span>
        </li>
        <li className="border-t-2 hover:bg-zinc-50" onClick={deleteNoteBook}>
          <span className="nav_small_span">Delete</span>
        </li>
      </ul>
    );
  }
};

export default NavList;
