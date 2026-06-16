const OutlineButton = ({onClick, className, children, ...props}) => {
  return (
    <>
      <button
        className={`border-2 border-indigo-500/60 rounded-lg px-2 py-2 hover:cursor-pointer ${className}`}
        onClick={onClick}
        {...props}
      >
        {children || "Click Me"}
      </button>
    </>
  );
};

export default OutlineButton;
