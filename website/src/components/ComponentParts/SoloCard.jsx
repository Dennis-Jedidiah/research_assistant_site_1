const SoloCard = ({
  border,
  title,
  subtitle,
  price,
  body_text,
  title_color,
}) => {
  return (
    <div className={`flex flex-col gap-2 p-4 ${border}  bg-custom-white-200`}>
      <div className={`${title_color} w-fit font-bold`}>{title}</div>
      {subtitle ? <div className="font-light">{subtitle}</div> : null}
      {price ? (
        <div className="font-semibold text-custom-green-600 text-xl">{price}</div>
      ) : null}
      {body_text ? (
        <ul className="list-disc list-inside font-light">
          {body_text.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default SoloCard;
