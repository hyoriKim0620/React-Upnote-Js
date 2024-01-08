import styled from "styled-components";
import LeftBtns from "./LeftBtns/LeftBtns";
import RightBtns from "./RightBtns/RightBtns";
import SearchInput from "./searchInput/SearchInput";

const Header = () => {
  return (
    <div className="sticky flex h-full">
      <TopBox className="grow ml-2">
        <LeftBtns />
      </TopBox>
      <TopBox className="grow-[7]" style={{ justifyContent: "flex-start" }}>
        <SearchInput width={"350"} />
      </TopBox>
      <TopBox className="grow">
        <RightBtns />
      </TopBox>
    </div>
  );
};

export default Header;

const TopBox = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
