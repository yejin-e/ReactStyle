import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-dvw h-dvh justify-center items-center">
      <div className="flex flex-col w-fit gap-5 items-center">
        <text className="text-3xl">원하는 스타일로 이동하세요.</text>

        <button
          className=" bg-blue-200 rounded-3xl py-3 px-5 hover:bg-amber-300"
          onClick={() => {
            navigate("/styledGoogle");
          }}
        >
          styled-components 버전
        </button>
        <button
          className="bg-blue-200 rounded-3xl py-3 px-5 hover:bg-amber-300"
          onClick={() => {
            navigate("/tailwindGoogle");
          }}
        >
          Tailwind CSS 버전
        </button>
      </div>
    </div>
  );
};

export default MainPage;
