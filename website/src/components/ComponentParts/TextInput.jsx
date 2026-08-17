const TextInput = ({ placeholder, name, height = "" }) => {
  return (
    <input
      type="text"
      name={name}
      id=""
      className={`${height} px-3 py-1 rounded-lg placeholder:text-custom-blue-300 bg-custom-white-100`}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
