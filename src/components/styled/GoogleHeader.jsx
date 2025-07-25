import styled from "styled-components";
import IconMenu from "./IconMenu";

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 60px;
`;

const HeaderContents = styled.nav`
  display: flex;
  flex-direction: row;
  padding: 0 0 0 20px;
  gap: 15px;
  align-items: center;

  a {
    font-weight: 500;
    text-decoration: inherit;
  } 
`;

const Menu = styled.svg`
  display: flex;
  width: 20px;
  height: 20px;
  margin: 0 5px;
`;

const Login = styled.button`
  border: solid 1px darkgray;
  background-color: royalblue;
  border-radius: 30px;
  color: white;
  padding: 10px;
  width: 90px;
`;

const GoogleHeader = ({ }) => {
  return (
    <Header>
      <HeaderContents>
        <a>
          Google 정보
        </a>
        <a>
          스토어
        </a>
      </HeaderContents>

      <HeaderContents>
        <a>
          Gmail
        </a>
        <a>
          이미지
        </a>
        <Menu focusable="false" viewBox="0 0 24 24">
          <IconMenu />
        </Menu>
        <Login>
          로그인
        </Login>
      </HeaderContents>
    </Header>
  );
};

export default GoogleHeader;
