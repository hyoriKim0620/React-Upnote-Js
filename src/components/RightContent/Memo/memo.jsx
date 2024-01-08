// import React from 'react'

import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
import { Container } from "./memo.styles";

const Memo = ({ memo }) => {
  dayjs.extend(calendar);
  dayjs().calendar();
  const edited_date = dayjs()
    .calendar(dayjs(memo.edited_date))
    .replace(" at ", ", ");

  return (
    <Container className="relative w-full">
      <div
        style={{
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        {memo.title}
      </div>
      <div>{memo.additional_text}</div>
      <div>{edited_date}</div>
    </Container>
  );
};

export default Memo;
