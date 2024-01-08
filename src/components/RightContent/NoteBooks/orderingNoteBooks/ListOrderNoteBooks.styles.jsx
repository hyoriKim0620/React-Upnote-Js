import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: #fff;

  div {
    cursor: pointer;
    &:hover {
      background-color: #f7f7f7;
    }
  }
`;

export const ListNoteBox = styled.div`
  height: 45px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 5px 10px;
  border-bottom: 1px solid #ececec;
  font-size: 14px;
  position: relative;
  &:hover {
    .list_edit_icon {
      visibility: visible;
    }
  }

  .list_edit_icon {
    position: absolute;
    right: 35px;
    visibility: hidden;
  }
`;
