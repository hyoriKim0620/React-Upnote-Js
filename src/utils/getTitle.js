// 내용의 첫번째 줄, 영역 넘치는 거 말줄임표는 css처리
export const getMemoTitle = (text_arr) => {
  let title = "";

  const nextLineIndex = text_arr.findIndex((text) => text.type === "linebreak");

  if (nextLineIndex > -1) {
    text_arr.slice(0, nextLineIndex).forEach((item) => {
      title += `${item.text}`;
    });
  } else {
    text_arr.forEach((item) => {
      title += `${item.text}`;
    });
  }

  return title;
};

export const getNoteName = (name) => {
  let noteName = name;

  if (noteName.length > 14) {
    noteName = noteName.slice(0, 14) + "...";
  }

  return noteName;
};
