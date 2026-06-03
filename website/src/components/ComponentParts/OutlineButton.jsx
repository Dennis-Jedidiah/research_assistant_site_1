const OutlineButton = ({ label, onClick }) => {
  return (
    <>
      <button
        className="border border-gray-400 border-2 rounded-lg px-2 py-2 text-base w-full"
        onClick={onClick}
      >
        {label || "Click Me"}
      </button>
    </>
  );
};

export default OutlineButton;
