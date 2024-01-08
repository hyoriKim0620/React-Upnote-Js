import styled from "styled-components";

export const NotebooksTitle = styled.div`
  width: 100%;
  height: 45px;
  background-color: #f7f7f7;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;

  div {
    display: flex;
  }

  .right_plus_btn {
    transform: translate(5px, 6px);
    margin: 0 7px;
    cursor: pointer;

    &:hover {
      color: blue;
    }
  }
`;

export const EmptyContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    background-color: #f7f7f7;
    padding: 13px;
    display: inline-block;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  p {
    font-size: 13px;
    margin-bottom: 10px;

    &:nth-child(3) {
      cursor: pointer;
      color: #0078c5;
      font-weight: bold;
    }
  }
`;

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  border: 1px solid #ddd;
`;

export const ToggleButton = styled.button`
  flex: 1;
  text-align: center;
  cursor: pointer;
  padding: 4px 10px;
  border: none;
  font-size: 20px;

  ${(props) =>
    props.$left &&
    `background-color: ${props.$checked ? "#666666" : "#fff"}; color: ${
      props.$checked ? "#fff" : "#666666"
    };`}

  ${(props) =>
    props.$right &&
    `background-color: ${props.$checked ? "#fff" : "#666666"};color: ${
      props.$checked ? "#666666" : "#fff"
    };`}
`;
