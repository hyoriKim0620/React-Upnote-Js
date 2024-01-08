import styled from "styled-components";

export const ImageEmptyMemo = styled.div`
  width: 100px;
  height: 130px;
  border-radius: 10px !important;

  ${(props) => `background-image: url(${props.$img_url});`}
`;
