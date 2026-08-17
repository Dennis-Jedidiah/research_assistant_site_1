const SolidButton = ({onClick, className, children, ...props}) => {
  return (
    <>
      <button
        className={`border-2 border-custom-blue-500 rounded-lg bg-custom-blue-500 text-white px-2 py-1 hover:cursor-pointer ${className}`}
        onClick={onClick}
        {...props}
      >
        {children || "Click Me"}
      </button>
    </>
  );
};

export default SolidButton;
