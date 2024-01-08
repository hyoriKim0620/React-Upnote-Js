import { Container, ItemsBox, MainBox } from "./index.styles";
import { useEffect, useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { LuNewspaper } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { BsPlusLg } from "react-icons/bs";
import NoteBookList from "./NoteBooks/NoteBookList";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  showNoteBookListState,
  noteBookListState,
  selectNoteBookState,
  NotebooksName,
  showCreateNoteBookState,
  memoListState,
} from "../../store/recoil";
import { Tooltip } from "primereact/tooltip";
import { localStorageGetItem } from "../../store/noteBook/noteBookSetter";

const other_menu = [{ name: "Tags" }, { name: "Templates" }, { name: "Trash" }];

const LeftSideBar = () => {
  const noteBooksName = useRecoilValue(NotebooksName);
  const [noteBookToggle, setNoteBookToggle] = useState(false);
  // 오른쪽 영역에 NoteBookList 보여주는 setter
  const [, setShowNoteBookList] = useRecoilState(showNoteBookListState);
  const [noteBookList, setNoteBookList] = useRecoilState(noteBookListState);
  const [, setMemoList] = useRecoilState(memoListState);
  const [, setShowCreateNoteBook] = useRecoilState(showCreateNoteBookState);
  const [selectNoteBook, setSelectNoteBook] =
    useRecoilState(selectNoteBookState);

  useEffect(() => {
    // 초기 NoteBook 데이터를 localStorage에서 가져와서 state에 저장
    const noteBookList = localStorage.getItem("noteBookList")
      ? localStorageGetItem("noteBookList")
      : [];
    setNoteBookList(noteBookList);
    setShowNoteBookList(true);

    // 초기 Memo 데이터를 localStorage에서 가져와서 state에 저장
    const memoList = localStorage.getItem("memoList")
      ? localStorageGetItem("memoList")
      : [];
    setMemoList(memoList);
  }, []);

  const handleShowNoteBookList = () => {
    setShowNoteBookList(true);
    setSelectNoteBook({});
  };

  const handleShowCreateNoteBook = () => {
    setShowCreateNoteBook(true);
  };

  return (
    <Container>
      <MainBox>
        <ItemsBox>
          <li className="sidebar_all_notes hover-item">
            <span className="sidebar_icon">
              <IoIosArrowForward />
            </span>
            <span className="mr-2">
              <LuNewspaper />
            </span>
            <span className="sidebar_text">All Notes</span>
            <p className="text-[12px] text-gray-400 transform -translate-y-[2px] ml-1 font-bold">
              4
            </p>
            <span className="all_notes_icon sidebar_text font-extrabold text-right absolute right-4 hidden">
              <HiOutlineDotsHorizontal size={18} color="gray" />
            </span>
          </li>
          <li className={"sidebar_other_menu"}>
            <span className="sidebar_icon">
              <IoIosArrowForward />
            </span>
            <span className="sidebar_text">QUICK ACCESS</span>
          </li>
          <li className="sidebar_other_menu">
            <span
              className="sidebar_icon"
              onClick={() => setNoteBookToggle(!noteBookToggle)}
            >
              {noteBookToggle ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </span>
            <span className="sidebar_text" onClick={handleShowNoteBookList}>
              {noteBooksName.toLocaleUpperCase()} {/* NOTEBOOKS */}
            </span>
            <span
              data-pr-tooltip="New NoteBook"
              data-pr-position="top"
              className="tooltip_span sidebar_text font-extrabold text-right absolute right-2"
            >
              <BsPlusLg size={18} onClick={handleShowCreateNoteBook} />
              <Tooltip
                target=".tooltip_span"
                style={{
                  fontSize: "14px",
                  background: "#303030",
                  color: "#fff",
                  borderRadius: "4px",
                  padding: "5px",
                }}
              />
            </span>
          </li>
          {noteBookToggle && noteBookList.length > 0 && (
            <NoteBookList
              noteBookList={noteBookList}
              selectNoteBook={selectNoteBook}
              setSelectNoteBook={setSelectNoteBook}
            />
          )}
          {other_menu.map((item, i) => (
            <li key={i} className="sidebar_other_menu">
              <span className="sidebar_icon">
                <IoIosArrowForward />
              </span>
              <span className="sidebar_text">
                {item.name.toLocaleUpperCase()}
              </span>
            </li>
          ))}
        </ItemsBox>
      </MainBox>
    </Container>
  );
};

export default LeftSideBar;
