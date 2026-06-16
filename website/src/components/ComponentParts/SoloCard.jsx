const SoloCard = ({
  border,
  title,
  subtitle,
  price,
  body_text,
  title_color,
}) => {
  return (
    <div className={`flex flex-col gap-2 p-4 ${border}  bg-slate-100/50`}>
      <div className={`${title_color} w-fit font-bold`}>{title}</div>
      {subtitle ? <div className="font-light">{subtitle}</div> : null}
      {price ? (
        <div className="font-semibold text-rose-800/60 text-xl">{price}</div>
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
