import IconMenu from "../../icon/IconMenu";

const GoogleHeader = ({}) => {
  return (
    <header className="flex flex-row justify-between items-center p-2.5 h-15">
      <nav class="flex flex-row items-center gap-4">
        <a className="ml-3">Google 정보</a>
        <a>스토어</a>
      </nav>

      <nav class="flex flex-row items-center gap-4">
        <a>Gmail</a>
        <a>이미지</a>
        <svg
          className="flex w-5 h-5 mx-1"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <IconMenu />
        </svg>

        <button className="flex bg-[#4169e1] border border-gray-500 border-solid rounded-4xl text-white justify-center items-center p-3 w-22 h-10 hover:bg-red-500">
          로그인
        </button>
      </nav>
    </header>
  );
};

export default GoogleHeader;
