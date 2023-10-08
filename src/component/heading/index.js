import "./index.css";

export default function Heading({ children, border }) {
  return (
    <h1 className={`heading ${border ? "heading--border" : ""} `}>
      {children}
    </h1>
  );
}
