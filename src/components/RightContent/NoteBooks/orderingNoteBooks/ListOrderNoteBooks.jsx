// import React from 'react';
import { TbPencil } from "react-icons/tb";
import { ImgBox } from "../../../LeftSideBar/NoteBooks/NoteBook.styles";
import {
  Container,
  ListNoteBox,
} from "../orderingNoteBooks/ListOrderNoteBooks.styles";

const ListOrderNoteBooks = ({
  noteBookList,
  openEditNoteBook,
  handleNoteBookClick,
}) => {
  return (
    <Container>
      {noteBookList.map((note) => (
        <ListNoteBox key={note.id} onClick={() => handleNoteBookClick(note)}>
          <ImgBox>
            <img
              src={note.image.image_url}
              alt="noteBook cover"
              className="img_box_image"
            />
          </ImgBox>
          <span>{note.name}</span>
          <TbPencil
            color="gray"
            size={20}
            className="list_edit_icon"
            onClick={() => openEditNoteBook(note)}
          />
        </ListNoteBox>
      ))}
    </Container>
  );
};

export default ListOrderNoteBooks;
