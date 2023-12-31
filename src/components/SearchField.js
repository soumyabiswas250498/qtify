function SearchField() {
  return (
    <div className="flex items-center w-full h-full border  border-black rounded-xl bg-white">
      <input
        placeholder="Search a song of your choice"
        className=" w-full h-full px-3 pb-1 rounded-l-xl lato"
      />
      <div className="w-[66px] h-full flex items-center justify-center bg rounded-r-xl border-l border-black cursor-pointer ">
        <img src="./Searchicon.svg" alt="search" />
      </div>
    </div>
  );
}

export default SearchField;
