import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 15px 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-auto-rows: 130px;
  gap: 2.1rem;
`;

export const ImageNoteBox = styled.div`
  max-height: 130px;
  color: white;
  font-size: 14px;
  letter-spacing: 0.2px;
  justify-items: center;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    div {
      visibility: visible;
    }
  }

  .modal_checked_icon {
    background-color: rgba(0, 0, 0, 0.4);
    width: 25px;
    height: 25px;
    border-radius: 50%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
  }

  .select_cover {
    visibility: visible;
  }

  ${(props) => `background-image: url(${props.$img_url});`}
`;

export const TextBox = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  font-size: 13px;
  padding: 6px 7px;
  text-align: left;
  font-weight: bold;
  border-radius: 5;
  border-radius: 0 0 10px 10px;
`;

export const EditNoteIcon = styled.div`
  width: 32px;
  height: 32px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 5px;
  top: 5px;
  visibility: hidden;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
