import styled from "styled-components";

const Footer = styled.footer`
  background-color: whitesmoke;

  div {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    height: 40px;

    span {
      display: flex;
      flex-direction: row;
      gap: 25px;
    }
  }
`;

const Hr = styled.hr`
  background: lightgray;
  height: 1px;
  border: 0;
`;


const GoogleFooter = ({ }) => {
  return (
    <Footer>
      <div>
        대한민국
      </div>

      <Hr />

      <div>
        <span>
          <p>
            광고
          </p>
          <p>
            비즈니스
          </p>
          <p>
            검색의 원리
          </p>
        </span>
        <span>
          <p>
            개인정보처리방침
          </p>
          <p>
            약관
          </p>
          <p>
            설정
          </p>
        </span>
      </div>
    </Footer>
  );
};

export default GoogleFooter;
