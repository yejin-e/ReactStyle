import IconCamera from "../../icon/IconCamera";
import IconKeyboard from "../../icon/IconKeyboard";
import IconMagnifier from "../../icon/IconMagnifier";
import IconMic from "../../icon/IconMic";

const GoogleSearch = ({}) => {
  return (
    <div class="flex flex-row items-center w-150 h-12 min-w-25 border border-solid border-gray-200 rounded-3xl my-4 mx-auto pr-6 pl-4 gap-4 shadow-xl">
      <svg
        focusable="false"
        viewBox="0 0 24 24"
        width="24px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <IconMagnifier />
      </svg>
      <input class="flex h-full w-3/4 border-none outline-none" type="text" />

      <svg
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <IconKeyboard />
      </svg>
      <svg
        focusable="false"
        viewBox="0 -960 960 960"
        width="24px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <IconMic />
      </svg>
      <svg
        focusable="false"
        viewBox="0 -960 960 960"
        width="24px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <IconCamera />
      </svg>
    </div>
  );
};

export default GoogleSearch;
