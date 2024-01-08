import styled from "styled-components";

export const Container = styled.div`
  width: 225px;
  min-height: 100%;
  border-right: 1px solid #ddd;
`;

export const MainBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  &:hover {
    &::-webkit-scrollbar {
      width: 7px;
    }
  }

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

export const ItemsBox = styled.ul`
  position: relative;

  li {
    width: 100%;
    height: 40px;
    list-style: none;
    display: flex;
    align-items: center;
    font-weight: 500;
    padding: 0 5px;
    cursor: pointer;

    &:hover {
      .all_notes_icon {
        display: inline-block;
      }
    }
  }

  .hover-item {
    &:hover {
      background: #f5f5f5;
    }
  }
  .active-item {
    background-color: #f5f5f5;
  }

  .inactive-item {
    transition: 250ms background-color ease-in-out,
      250ms border-left ease-in-out;
    &:hover {
      background-color: rgba(255, 255, 255, 0.15);
    }
  }

  span {
    font-size: 13px;
    font-weight: 600;
  }

  .sidebar_icon {
    color: darkgray;
    font-size: 16px;
    margin-right: 7px;
    &:hover {
      color: #494949;
    }
  }

  .sidebar_all_notes {
    .sidebar_text {
      color: #000;
    }
  }

  .sidebar_other_menu {
    .sidebar_text {
      color: #0078c5;
    }
  }

  .memo_cnt {
    padding-left: 4px;
    color: darkgray;
    font-weight: 600;
  }
`;
