export const getNoteBookIdByMemo = (obj, key) => {
  // obj는 memoList, key는 noteBookId
  if (key in obj) {
    return obj[key];
  } else {
    return [];
  }
};
