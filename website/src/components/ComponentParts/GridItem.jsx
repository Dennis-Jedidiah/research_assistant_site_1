const GridItem = ({ border, title, body_text, icon, color }) => {
  return (
    <div className={`p-5 rounded-2xl ${border}`}>
      <div className="flex items-center font-bold text-lg">
        <div className={`p-2 ${color} w-fit rounded-md`}>{icon}</div>
        {title}
      </div>
      <div>{body_text}</div>
    </div>
  );
};

export default GridItem;
