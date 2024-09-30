import './card2.css';

const FundCard = ({ imageSrc, title, description, className, style }) => {
  return (
    <div className={`Card ${className}`} >
      <div className="upperContent">
        <img src={imageSrc} alt={title} style={style} />
        <p>{title}</p>
      </div>
      <div className="lower">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FundCard;
