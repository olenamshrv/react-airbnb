import Heading from "../heading";
import "./index.css";

export default function Owner({ contactInfo }) {
  const { name, image, response_rate, response_time, info, phone } = {
    ...contactInfo,
  };

  return (
    <div className="owner__block">
      <div className="owner__header">
        <img className="owner__avatar" src={image} alt="Owner"></img>
        <div className="owner__info">
          <Heading children={`Господар - ${name}`} />
          <div className="owner__details">
            <span className="owner__sub-details">{phone}</span>
            <span className="owner__sub-details">{response_time}</span>
            <span className="owner__sub-details">{`${response_rate}% відсотків швидкості відгуку`}</span>
          </div>
        </div>
      </div>
      <p class="owner__about">{info}</p>
    </div>
  );
}
