import GoogleHeader from "./google/GoogleHeader";
import GoogleSearch from "./google/GoogleSearch";
import GoogleSymbol from "../icon/GoogleSymbol";
import GoogleFooter from "./google/GoogleFooter";
import { useNavigate } from "react-router-dom";

const GoogleTailwind = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-dvh w-dvs">
      <GoogleHeader />

      <main className="flex flex-col flex-1 items-center">
        <button
          className="flex flex-1 items-end"
          onClick={() => {
            navigate("/tailwindTodolist");
          }}
        >
          <svg
            height="92"
            viewBox="0 0 272 92"
            width="272"
            xmlns="http://www.w3.org/2000/svg"
          >
            <GoogleSymbol />
          </svg>
        </button>

        <GoogleSearch />

        <div class="flex flex-row flex-2 justify-center items-start gap-2.5">
          <div class="bg-[#f5f5f5] p-2.5">Google 검색</div>
          <div class="bg-[#f5f5f5] p-2.5">I'm Feeling Lucky</div>
        </div>
      </main>

      <GoogleFooter />
    </div>
  );
};

export default GoogleTailwind;
