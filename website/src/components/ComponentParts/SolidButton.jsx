const SolidButton = ({ label, onClick }) => {
  return (
    <>
      <button
        className="border border-gray-400 rounded-lg bg-gray-400 text-white px-2 py-2 text-base w-full"
        onClick={onClick}
      >
        {label || "Click Me"}
      </button>
    </>
  );
};

export default SolidButton;
