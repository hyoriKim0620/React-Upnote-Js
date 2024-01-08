import NoteBook from "./NoteBook";
import { useRecoilValue } from "recoil";
import { memoListState } from "../../../store/recoil";
import { getNoteBookIdByMemo } from "../../../utils/getNoteBookIdByMemo";

const NoteBookList = ({ noteBookList, selectNoteBook, setSelectNoteBook }) => {
  const memoList = useRecoilValue(memoListState);
  let memoCnt = (id) => {
    return getNoteBookIdByMemo(memoList, id);
  };

  return (
    <>
      {noteBookList &&
        noteBookList.map((noteBook) => (
          <NoteBook
            key={noteBook.id}
            note={noteBook}
            memoCnt={memoCnt(noteBook.id)}
            selectNoteBook={selectNoteBook}
            setSelectNoteBook={setSelectNoteBook}
          />
        ))}
    </>
  );
};

export default NoteBookList;
