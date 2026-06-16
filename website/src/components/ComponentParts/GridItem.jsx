const GridItem = ({ border, title, body_text, icon, color }) => {
  return (
    <div className={`Flex flex-col p-3 ${border} rounded-md`}>
      <div className={`p-2 ${color} w-fit rounded-md mb-6`}>{icon}</div>
      <div className="mt-6">
        <div className="font-bold">{title}</div>
        <div>{body_text}</div>
      </div>
    </div>
  );
};

export default GridItem;
