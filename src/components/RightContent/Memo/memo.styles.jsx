import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
  div {
    padding-bottom: 7px;

    &:nth-child(1) {
      font-weight: bold;
    }
    &:nth-child(3) {
      padding-bottom: 0;
      color: darkgray;
      font-size: 11px;
    }
  }
`;
