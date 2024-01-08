import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  border-left: 1px solid rgb(221, 221, 221);
  border-right: 1px solid rgb(221, 221, 221);

  &::-webkit-scrollbar {
    width: 0;
    background-color: white;
  }

  &::-webkit-scrollbar-thumb {
    background-color: lightgray;
    border-radius: 7px;
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #fcfcfc;
  }
`;

export const MemoHeader = styled.div`
  height: 37px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 15px;
  background: #f5f5f5;
  border-bottom: 1px solid rgb(221, 221, 221);
  cursor: pointer;
`;

export const MemoBox = styled.div`
  height: 110px;
  font-size: 14px;

  li {
    height: 100%;
    list-style: none;
    display: flex;
    justify-content: start;
    align-items: center;
    cursor: pointer;
    padding: 7px 15px;
  }

  li::marker {
    display: none;
  }
`;
