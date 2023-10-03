import "./CardInit.css";

function CardInit({ title, link }) {
  return (
    <div className="adventure-card">
      <a href={"/" + link}>
        <h2 className="aventurate">{title}</h2>
      </a>
    </div>
  );
}

export default CardInit;
