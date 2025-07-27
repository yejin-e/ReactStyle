import styled, { createGlobalStyle } from "styled-components";
import GoogleFooter from "./GoogleFooter";
import GoogleHeader from "./GoogleHeader";
import GoogleSearch from "./GoogleSearch";
import GoogleSymbol from "../icon/GoogleSymbol";

const GlobalStyle = createGlobalStyle`
  #root {
    margin: 0;
    padding: 0;
  }

  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: system-ui, Helvetica, Arial, sans-serif;
    font-size: 15px;
    line-height: 1.5;
    font-weight: 400;
  } 

  body {
    margin: 0;
    display: flex;
    /* place-items: center; */
    /* justify-content: center; */
    min-width: 320px;
    min-height: 100vh;
    height: 100dvh;
  }
`;

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  width: 100dvw;
`;

const Google = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
`;

const Tag = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

const Contents = styled.div`
  background-color: whitesmoke;
  padding: 10px;
`;

const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const GoogleStyled = () => {
  return (
    <>
      <GlobalStyle />

      <Screen>
        <GoogleHeader />

        <Main>
          <Google>
            <svg
              height="92"
              viewBox="0 0 272 92"
              width="272"
              xmlns="http://www.w3.org/2000/svg"
            >
              <GoogleSymbol />
            </svg>
          </Google>

          <GoogleSearch />

          <Tag>
            <Contents>Google 검색</Contents>
            <Contents>I'm Feeling Lucky</Contents>
          </Tag>
        </Main>

        <GoogleFooter />
      </Screen>
    </>
  );
};

export default GoogleStyled;
