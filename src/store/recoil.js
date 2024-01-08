import { atom, selector } from "recoil";
import { coverImageListSetter } from "../store/noteBook/coverImageSetter";
import { localStorageGetItem } from "./noteBook/noteBookSetter";

export const NotebooksName = atom({
  key: "noteBooksName",
  default: "Notebooks",
});

export const showNoteBookListState = atom({
  key: "showNoteBookListState",
  default: false,
});

export const noteBookListState = atom({
  key: "noteBookListState",
  default: [],
});

export const selectNoteBookState = atom({
  key: "selectNoteBookState",
  default: {},
});

export const editNoteBookState = atom({
  key: "editNoteBookState",
  default: null,
});

export const memoListState = atom({
  key: "memoListState",
  default: {},
});

export const memoListSetter = selector({
  key: "memoListSetter",
  get: ({ get }) => {
    const value = localStorageGetItem("memoList") || get(memoListState);
    return value;
  },
  set: ({ set }, updatedMemoList) => {
    set(memoListState, updatedMemoList);
  },
});

export const selectMemoState = atom({
  key: "selectMemoState",
  default: {},
});

export const showCreateNoteBookState = atom({
  key: "showCreateNoteBookState",
  default: false,
});

export const coverImageListState = atom({
  key: "coverImageListState",
  default: coverImageListSetter,
});

export const showNavbarState = atom({
  key: "showNavbarState",
  default: {
    memo: {
      showFlag: false,
      selectMemo: {},
    },
    noteBook: {
      showFlag: false,
      selectNoteBook: {},
    },
    noteBookHeader: {
      showFlag: false,
      selectNoteBook: {},
    },
  },
});
