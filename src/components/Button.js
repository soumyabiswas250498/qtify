function Button({ text }) {
  return (
    <div className=" flex justify-center items-center w-full h-full bg-slate-800 rounded-xl text-green cursor-pointer poppins">
      {text}
    </div>
  );
}

export default Button;
