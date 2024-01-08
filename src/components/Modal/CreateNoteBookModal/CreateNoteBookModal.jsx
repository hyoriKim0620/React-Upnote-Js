import {
  Box,
  ModalInput,
  TopBox,
  ButtonFill,
  ModalElements,
  CoverBox,
} from "./CreateNoteBookModal.styles";
import { ModalContainer } from "../Modal.styles";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  NotebooksName,
  coverImageListState,
  editNoteBookState,
  noteBookListState,
  selectNoteBookState,
  showCreateNoteBookState,
  showNavbarState,
} from "../../../store/recoil";
import { useEffect, useRef, useState } from "react";
import { v4 } from "uuid";
import { Button } from "../../Header/RightBtns/RightBtns";
import { ImageNoteBox } from "../../RightContent/NoteBooks/orderingNoteBooks/ImageOrderNoteBooks.styles";
import { FaCheck } from "react-icons/fa6";
import { checkEmptyObject } from "./../../../utils/checkEmptyObject";
import {
  localStorageSetItem,
  localStorageGetItem,
} from "./../../../store/noteBook/noteBookSetter";

const CreateNoteBookModal = () => {
  const modalRef = useRef();
  const coverImageList = useRecoilValue(coverImageListState);
  const noteBooksName = useRecoilValue(NotebooksName);
  const showNoteBookHeaderNavbar = useRecoilValue(showNavbarState);
  const [editNoteBook, setEditNoteBook] = useRecoilState(editNoteBookState);
  const [, setNoteBookList] = useRecoilState(noteBookListState);
  const [, setSelectNoteBook] = useRecoilState(selectNoteBookState);
  const [, setShowCreateNoteBook] = useRecoilState(showCreateNoteBookState);
  const [noteName, setNoteName] = useState(editNoteBook?.name || "");
  const [coverImage, setCoverImage] = useState(editNoteBook?.image || {});

  useEffect(() => {
    document.addEventListener("mousedown", checkModalRef);
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      // 컴포넌트 unMount될 때 event remove
      document.removeEventListener("mousedown", checkModalRef);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const checkModalRef = () => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeCreateNoteBookModal();
    }
  };

  const closeCreateNoteBookModal = () => {
    setShowCreateNoteBook(false);
    setEditNoteBook(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      createModalHandlerClick();
    } else if (e.key === "Escape") {
      closeCreateNoteBookModal();
    }
  };

  const createModalHandlerClick = async () => {
    let coverImageBase = checkEmptyObject(coverImage)
      ? coverImageList[0]
      : coverImage;

    if (noteName.length == 0) {
      return;
    }

    let noteBook = {
      name: noteName,
      image: coverImageBase,
    };

    if (editNoteBook) {
      noteBook = { ...editNoteBook, ...noteBook };
      saveNoteBookList("edit", noteBook);
    } else {
      // eslint-disable-next-line no-unused-vars
      noteBook = {
        ...noteBook,
        id: v4(),
      };
      saveNoteBookList("add", noteBook);
    }
  };

  const createNoteBookFunc = (noteBook) => {
    const noteBookList = localStorage.getItem("noteBookList")
      ? JSON.parse(localStorage.getItem("noteBookList"))
      : [];

    noteBookList.push(noteBook);
    return noteBookList;
  };

  const editNoteBookFunc = (noteBook) => {
    let noteBookList = localStorage.getItem("noteBookList")
      ? localStorageGetItem("noteBookList")
      : [];

    noteBookList = noteBookList.map((note) =>
      note.id === noteBook.id ? noteBook : note
    );
    return noteBookList;
  };

  const deleteNoteBookSetter = () => {
    let noteBookList = localStorage.getItem("noteBookList")
      ? localStorageGetItem("noteBookList")
      : [];

    noteBookList = noteBookList.filter(({ id }) => id !== editNoteBook.id);
    return noteBookList;
  };

  const saveNoteBookList = (cmd, noteBook) => {
    let noteBookList = localStorage.getItem("noteBookList")
      ? localStorageGetItem("noteBookList")
      : [];

    if (cmd == "add") {
      noteBookList = createNoteBookFunc(noteBook); // noteBook Object
    } else if (cmd == "edit") {
      noteBookList = editNoteBookFunc(noteBook); // noteBook Object
    } else {
      noteBookList = deleteNoteBookSetter();
    }

    localStorageSetItem("noteBookList", noteBookList);
    setNoteBookList(noteBookList);
    setShowCreateNoteBook(false);
    setEditNoteBook(null);

    // noteBook을 선택한 상태로 noteBook 정보 수정 => 선택한 noteBook의 변경된 데이터로 다시 set
    if (showNoteBookHeaderNavbar["noteBookHeader"]["showFlag"]) {
      const changeNoteBook = noteBookList.find(
        (note) => note.id === editNoteBook.id
      );
      setSelectNoteBook(changeNoteBook);
    }
  };

  return (
    <ModalContainer>
      <Box
        ref={modalRef}
        $justify_content={editNoteBook ? "space-between" : "flex-end"}
      >
        <TopBox>
          {editNoteBook ? "Edit" : "Create New"} {noteBooksName}
        </TopBox>

        <ModalElements>
          <span>Name</span>
          <ModalInput
            type="text"
            value={noteName}
            name="title"
            placeholder={`Enter ${noteBooksName.toLocaleLowerCase()} name`}
            onChange={(e) => setNoteName(e.target.value)}
          />
        </ModalElements>

        <ModalElements>
          <span>Lock</span>
          <span style={{ flexGrow: 1 }} />
        </ModalElements>

        <ModalElements>
          <span style={{ alignItems: "flex-start" }}>Cover</span>
          <CoverBox className="cover_box">
            {coverImageList.map((item, i) => (
              <ImageNoteBox
                key={i}
                $img_url={item.image_url}
                onClick={() => setCoverImage(item)}
              >
                <span
                  className={
                    coverImage.id === item.id
                      ? "select_cover modal_checked_icon"
                      : "modal_checked_icon"
                  }
                >
                  <FaCheck size={16} />
                </span>
              </ImageNoteBox>
            ))}
          </CoverBox>
        </ModalElements>

        <div className="create_note_btn">
          {editNoteBook ? (
            <>
              <span
                className="cursor-pointer"
                onClick={() => saveNoteBookList()}
              >
                Delete
              </span>
              <Button onClick={createModalHandlerClick}>Update</Button>
            </>
          ) : (
            <ButtonFill
              className={noteName.length > 0 ? "able_create" : "unable_create"}
              onClick={createModalHandlerClick}
            >
              Create
            </ButtonFill>
          )}
        </div>
      </Box>
    </ModalContainer>
  );
};

export default CreateNoteBookModal;
