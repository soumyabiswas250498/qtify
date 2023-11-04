import SearchField from '../components/SearchField';
import Button from '../components/Button';

function NavBar() {
  return (
    <div className="flex justify-between items-center w-screen bg-green h-[74px]  px-8">
      <div className="h-full flex items-center">
        <img src="./Group1.png" alt="logo" className="h-[34px] w-[67]" />
      </div>
      <div className="w-3/6 h-[48px] rounded-xl">
        <SearchField />
      </div>
      <div className="w-40 h-[48px]">
        <Button text={'Give Feedback'} />
      </div>
    </div>
  );
}

export default NavBar;
