// import React from 'react';
import { TbPencil } from "react-icons/tb";
import {
  Container,
  EditNoteIcon,
  ImageNoteBox,
  TextBox,
} from "./ImageOrderNoteBooks.styles";

const ImageOrderNoteBooks = ({
  noteBookList,
  openEditNoteBook,
  handleNoteBookClick,
}) => {
  return (
    <Container>
      {noteBookList.map((note) => (
        <ImageNoteBox
          onClick={() => handleNoteBookClick(note)}
          key={note.id}
          $img_url={note.image.image_url}
        >
          <EditNoteIcon onClick={(e) => openEditNoteBook(e, note)}>
            <TbPencil color="white" size={18} />
          </EditNoteIcon>
          <TextBox>{note.name}</TextBox>
        </ImageNoteBox>
      ))}
    </Container>
  );
};

export default ImageOrderNoteBooks;
