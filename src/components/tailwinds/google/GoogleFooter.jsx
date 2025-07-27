const GoogleFooter = ({}) => {
  return (
    <footer className="bg-gray-100">
      <div className="flex items-center px-7 h-12">대한민국</div>

      <hr className="bg-gray-300 h-px border-0" />

      <div className="flex flex-1 items-center justify-between px-7 h-12">
        <span className="flex flex-row gap-6">
          <p>광고</p>
          <p>비즈니스</p>
          <p>검색의 원리</p>
        </span>
        <span className="flex flex-row gap-6">
          <p>개인정보처리방침</p>
          <p>약관</p>
          <p>설정</p>
        </span>
      </div>
    </footer>
  );
};

export default GoogleFooter;
