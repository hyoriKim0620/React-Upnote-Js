import styled from "styled-components";

export const Box = styled.div`
  width: clamp(250px, 95%, 580px);
  background-color: white;
  color: black;
  border-radius: 10px;
  padding: 15px 18px 15px;

  .create_note_btn {
    display: flex;
    padding-top: 8px;

    span {
      font-size: 14px;
      color: red;
      font-weight: 600;
    }

    ${(props) => `justify-content: ${props.$justify_content};`}
  }
`;

export const TopBox = styled.div`
  color: #404040;
  font-weight: 600;
  font-size: clamp(1rem, 3vw, 1.1rem);
  text-align: center;
`;

export const ModalElements = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 16px 8px;
  padding: 4px 0;

  span {
    width: 100px;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  &:hover {
    .cover_box::-webkit-scrollbar {
      width: 7px;
    }
  }

  .cover_box::-webkit-scrollbar {
    width: 0;
    background-color: white;
  }

  .cover_box::-webkit-scrollbar-thumb {
    background-color: lightgray;
    border-radius: 7px;
    height: 10px;
  }
  .cover_box::-webkit-scrollbar-track {
    background-color: #fcfcfc;
  }
`;

export const ModalInput = styled.input`
  height: 35px;
  outline: none;
  border: 1px solid #f3f3f3;
  border-radius: 5px;
  background: #f3f3f3;
  text-indent: 15px;
  font-size: 14px;
  flex-grow: 1;
`;

export const ButtonFill = styled.button`
  padding: 5px 20px;
  border-radius: 5px;
  cursor: pointer;
  color: lightgrey;
  font-size: 14px;

  &.able_create {
    border: 1px solid #0078c5;
    background: #0078c5;
    color: #fff;
  }
  &.unable_create {
    border: 1px solid #bbbbbb;
  }
`;

export const CoverBox = styled.div`
  flex-grow: 1;
  background: #fff;
  max-height: 200px;
  height: 200px;
  overflow-y: auto;

  padding: 0.5rem 0.7rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(54px, 1fr));
  grid-auto-rows: 70px;
  gap: 1.7rem;
`;
