const TextInput = ({ placeholder, name, height }) => {
  return (
    <input
      type="text"
      name={name}
      id=""
      className={`{height} border-1 border-gray-300 px-3 py-1 rounded-lg placeholder:text-gray-300`}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
