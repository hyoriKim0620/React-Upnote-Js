import styled from "styled-components";
import Header from "./components/Header/index";
import LeftSideBar from "./components/LeftSideBar/index";
import RightContent from "./components/RightContent/index";
import CreateNoteBookModal from "./components/Modal/CreateNoteBookModal/CreateNoteBookModal";
import { useRecoilValue } from "recoil";
import { showCreateNoteBookState } from "./store/recoil";
import Nav from "./components/Nav/Nav";

function App() {
  const showCreateNoteBookModal = useRecoilValue(showCreateNoteBookState);

  return (
    <Container>
      {showCreateNoteBookModal && <CreateNoteBookModal />}
      <div className="h-[45px]">
        <Header />
      </div>
      <div
        style={{
          borderTop: "1px solid #ddd",
          height: "calc(100vh - 47px)",
          display: "flex",
        }}
      >
        <LeftSideBar />
        <RightContent />
      </div>
    </Container>
  );
}

export default App;

const Container = styled.div`
  min-width: 1400px;
  max-width: 1920px;
  display: inline-block;
  margin: 0 auto;
  text-align: center;
  height: 100vh;
  z-index: 1;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
`;
