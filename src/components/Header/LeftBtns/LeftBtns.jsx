import styled from "styled-components";
import { PiListLight } from "react-icons/pi";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { VscRefresh } from "react-icons/vsc";

const LeftBtns = () => {
  return (
    <div className="flex justify-around grow border-b-gray-100">
      <IconBox style={{ fontSize: "1.4rem" }}>
        <PiListLight />
      </IconBox>
      <IconBox style={{ transform: "translateY(3px)" }}>
        <SlArrowLeft />
      </IconBox>
      <IconBox style={{ transform: "translateY(3px)", color: "gray" }}>
        <SlArrowRight />
      </IconBox>
      <IconBox style={{ fontSize: "1.4rem", rotate: "90deg" }}>
        <VscRefresh />
      </IconBox>
    </div>
  );
};

export default LeftBtns;

const IconBox = styled.div`
  cursor: pointer;
  font-size: 1rem;
`;
