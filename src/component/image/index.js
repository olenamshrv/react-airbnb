import "./index.css";

export default function Image({ source, name }) {
  return <img className="image" src={source} alt={name}></img>;
}
