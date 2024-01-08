import Memo from "./memo";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Container, MemoBox, MemoHeader } from "./memoList.styles";
import { useEffect, useState } from "react";
import Nav from "../../Nav/Nav";
import { useRecoilState } from "recoil";
import { selectMemoState, showNavbarState } from "../../../store/recoil";

const MemoList = ({ selectNoteBook, memo }) => {
  const [showNavBar, setShowNavBar] = useState(false);
  const [showNavBarState, setShowNavBarState] = useRecoilState(showNavbarState);
  const [selectMemo, setSelectMemo] = useRecoilState(selectMemoState);

  useEffect(() => {
    addEventListener("click", (e) => {
      if (e.target.id !== "noteBookHeaderDots") {
        setShowNavBar(false);
      }
    });

    return () => {
      removeEventListener("click", (e) => {
        if (e.target.id !== "noteBookHeaderDots") {
          setShowNavBar(false);
          const contextBar = document.getElementById("nav_container");
          if (contextBar) {
            contextBar.style.top = null;
            contextBar.style.left = null;
          }
        }
      });
    };
  }, []);

  const handleShowNavBar = (e) => {
    e.preventDefault();

    setShowNavBar(true);
    setShowNavBarState({
      ...showNavBarState,
      noteBookHeader: {
        showFlag: true,
        selectNoteBook: selectNoteBook,
      },
    });

    const contextBar = document.getElementById("nav_container");

    if (contextBar) {
      contextBar.style.top = e.pageY + "px";
      contextBar.style.left = e.pageX + "px";
    }
  };

  const handleClick = (e, memo) => {
    e.preventDefault();
    setSelectMemo(memo);
  };

  return (
    <Container>
      <MemoHeader>
        {selectNoteBook.name}
        <HiOutlineDotsHorizontal
          id="noteBookHeaderDots"
          size={28}
          color="black"
          onClick={handleShowNavBar}
          style={{ padding: "5px" }}
        />
      </MemoHeader>
      <MemoBox>
        {memo.map((item, i) => (
          <li
            key={i}
            onClick={(e) => handleClick(e, item)}
            className={`${selectMemo.id === item.id ? "memo_highlight" : ""}`}
          >
            <Memo memo={item} className="memo_contextbar" />
          </li>
        ))}
      </MemoBox>

      <div>
        <Nav division={"noteBookHeader"} showNavBar={showNavBar} />
      </div>
    </Container>
  );
};

export default MemoList;
