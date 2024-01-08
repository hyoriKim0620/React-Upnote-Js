// import React from 'react';
import styled from "styled-components";
import { GoSearch } from "react-icons/go";

const SearchInput = ({ width }) => {
  return (
    <div className="ml-2" style={{ textAlign: "left" }}>
      <SearchBox width={width}>
        <button>
          <GoSearch
            className="mr-2"
            style={{
              fontSize: "17px",
              transform: "translateY(2px)",
            }}
          />
        </button>
        <input type="text" placeholder="Search" className="search_input" />
        <span>CtrlF</span>
      </SearchBox>
    </div>
  );
};

export default SearchInput;

export const SearchBox = styled.div`
  border: 1px solid lightgray;
  padding: 4px 10px;
  border-radius: 5px;
  width: 350px;
  background: #fff;
  position: relative;
  font-size: 14px;

  span {
    background: #eeeeff;
    padding: 4px;
    font-size: 12px;
    border-radius: 4px;
    color: gray;
    visibility: hidden;
    position: absolute;
    right: 7px;
  }

  &:hover {
    border: 1px solid blue;

    span {
      visibility: visible;
    }
  }

  ${(props) => `width: ${props.width}px;`}
`;
