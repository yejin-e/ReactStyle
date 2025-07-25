import styled from "styled-components";
import IconCamera from "./IconCamera";
import IconKeyboard from "./IconKeyboard";
import IconMagnifier from "./IconMagnifier";
import IconMic from "./IconMic";


const Search = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 600px;
  height: 50px;
  min-width: 100px;
  border: solid 1px whitesmoke;
  border-radius: 30px;
  margin: 15px auto;
  padding: 0 25px 0 17px;
  gap: 17px;
  box-shadow: 0px 8px 6px -10px #666;
`;

const TextContents = styled.input`
  display: flex;
  height: 100%;
  width: 75%;
  border: none;
  outline: none;
`;


const GoogleSearch = ({ }) => {
  return (
    <Search>
        <svg focusable="false" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg">
          <IconMagnifier />
        </svg>
      <TextContents type="text" />
        <svg viewBox="0 -960 960 960" width="24px" xmlns="http://www.w3.org/2000/svg">
          <IconKeyboard />
        </svg>
        <svg focusable="false" viewBox="0 -960 960 960" width="24px" xmlns="http://www.w3.org/2000/svg">
          <IconMic />
        </svg>
        <svg focusable="false" viewBox="0 -960 960 960" width="24px" xmlns="http://www.w3.org/2000/svg">
          <IconCamera />
        </svg>
    </Search>
  );
};

export default GoogleSearch;
