const OutlineButton = ({label}) => {
  return (
    <>
      <button className = "border border-gray-400 border-2 rounded-lg px-2 py-2 text-base w-full">{label || "Click Me"}</button>
    </>
  );
};

export default OutlineButton;
