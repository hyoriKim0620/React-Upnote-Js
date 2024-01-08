import styled from "styled-components";

export const NavContainer = styled.nav`
  position: fixed;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;

  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    padding: ${(props) =>
      props.$division == "noteBook" ? "8px 6px" : "8px 10px"};
    height: ${(props) =>
      props.$division == "noteBook" ? "30px !important" : "40px"};
    &:hover {
      background: ${(props) =>
        props.$division == "noteBookHeader" ? "#ddd" : ""};
    }

    span {
      padding-left: 15px;
      font-weight: 400;
    }

    .nav_small_span {
      font-size: 12px !important;
    }
  }

  display: ${(props) => (props.$show ? "block" : "none")};
  width: ${(props) => (props.$division == "noteBook" ? "160px" : "190px")};
`;
