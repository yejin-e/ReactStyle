import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="fullScreen" id="mainPage">
      <text>원하는 스타일로 이동하세요.</text>
      <>
        <button onClick={() => { navigate("/styled") }}>styled-components 버전</button>
        <button onClick={() => { navigate("/tailwind") }}>tailwind 버전</button>
      </>
    </div>
  )
}

export default MainPage;
