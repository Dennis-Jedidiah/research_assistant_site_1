const SolidButton = ({onClick, className, children, ...props}) => {
  return (
    <>
      <button
        className={`border-2 border-indigo-500 rounded-lg bg-indigo-500 px-2 py-2 hover:cursor-pointer ${className}`}
        onClick={onClick}
        {...props}
      >
        {children || "Click Me"}
      </button>
    </>
  );
};

export default SolidButton;
