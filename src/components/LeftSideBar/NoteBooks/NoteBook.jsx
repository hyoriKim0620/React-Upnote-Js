import { useRecoilState, useRecoilValue } from "recoil";
import { ItemsBox, MainBox } from "../index.styles";
import { ImgBox } from "./NoteBook.styles";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { getNoteName } from "../../../utils/getTitle";
import {
  memoListState,
  selectMemoState,
  showNavbarState,
  showNoteBookListState,
} from "../../../store/recoil";
import { useEffect, useState } from "react";
import Nav from "./../../Nav/Nav";

const NoteBook = ({ note, memoCnt, selectNoteBook, setSelectNoteBook }) => {
  const [showNavBar, setShowNavBar] = useState(false);
  const [showNavBarState, setShowNavBarState] = useRecoilState(showNavbarState);
  const [, setShowNoteBookList] = useRecoilState(showNoteBookListState);
  const [, setSelectMemo] = useRecoilState(selectMemoState);
  const memoList = useRecoilValue(memoListState);

  useEffect(() => {
    addEventListener("click", (e) => {
      if (e.target.id !== "noteBookDots") {
        setShowNavBar(false);
      }
    });

    return () => {
      removeEventListener("click", (e) => {
        if (e.target.id !== "noteBookDots") {
          setShowNavBar(!showNavBar);
          const contextBar = document.getElementById("nav_container");
          if (contextBar) {
            contextBar.style.top = null;
            contextBar.style.left = null;
          }
        }
      });
    };
  }, []);

  const handleClick = () => {
    setSelectNoteBook(note);
    setShowNoteBookList(false);

    const noteMemoList = memoList[note.id];
    if (noteMemoList && noteMemoList.length > 0) {
      setSelectMemo(noteMemoList[0]);
    }
  };

  const handleShowNoteBookNavBar = (e) => {
    e.stopPropagation();

    setShowNavBar(true);
    setShowNavBarState({
      ...showNavBarState,
      noteBook: {
        showFlag: true,
        selectNoteBook: note,
      },
    });

    const contextBar = document.getElementById("nav_container");
    if (contextBar) {
      contextBar.style.top = e.pageY + "px";
      contextBar.style.left = e.pageX + "px";
    }
  };

  return (
    <MainBox onClick={handleClick}>
      <ItemsBox>
        <li
          className={`sidebar_all_notes ${
            selectNoteBook.id === note.id ? "active-item" : "hover-item"
          }`}
        >
          <ImgBox>
            <img
              src={note.image.image_url}
              alt="noteBook cover"
              className="img_box_image"
            />
          </ImgBox>
          <span>{getNoteName(note.name)}</span>
          <span className="memo_cnt">
            {memoCnt.length > 0 && memoCnt.length}
          </span>
          <span className="all_notes_icon sidebar_text font-extrabold text-right absolute right-2 hidden">
            <HiOutlineDotsHorizontal
              size={26}
              color="gray"
              id="noteBookDots"
              onClick={handleShowNoteBookNavBar}
              style={{ padding: "5px" }}
            />
          </span>
        </li>
      </ItemsBox>

      <div>
        <Nav division={"noteBook"} showNavBar={showNavBar} />
      </div>
    </MainBox>
  );
};

export default NoteBook;
