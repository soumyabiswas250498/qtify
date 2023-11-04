// import searchIcon from "../../public/Searchicon.svg"

function NavBar() {
  return (
    <div className="flex justify-between items-center w-screen bg-[#34C94B] h-[74px]  px-8">
      <div className="h-full flex items-center">
        <img src="./Group1.png" alt="logo" className="h-[34px] w-[67]" />
      </div>
      <div className=" w-3/6 h-[48px] rounded-xl">
        <div className="flex items-center w-full h-full border  border-black rounded-xl bg-white">
          <input
            placeholder="Search a song of your choice"
            className=" w-full h-full p-2  rounded-xl"
          />
          <div className="w-[66px] h-full flex items-center justify-center bg-white rounded-r-xl border-l border-black">
            <img src="./Searchicon.svg" alt="search" />
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center w-40 h-[48px] bg-slate-800 rounded-xl text-[#34C94B]">
        Give Feedback
      </div>
    </div>
  );
}

export default NavBar;
