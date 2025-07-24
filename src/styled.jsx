import GoogleFooter from "./components/GoogleFooter";
import GoogleHeader from "./components/GoogleHeader";
import GoogleSearch from "./components/GoogleSearch";
import GoogleSymbol from "./components/GoogleSymbol";

const Google = () => {
  return (
    <div className="googleScreen">
      <GoogleHeader />

      <main>
        <div id="google">
          <svg height="92" viewBox="0 0 272 92" width="272" xmlns="http://www.w3.org/2000/svg">
            <GoogleSymbol />
          </svg>
        </div>

        <GoogleSearch />

        <div class="tag">
          <div class="contents">
            Google 검색
          </div>
          <div class="contents">
            I'm Feeling Lucky
          </div>
        </div>
      </main>

      <GoogleFooter />
    </div>
  )
};

export default Google;