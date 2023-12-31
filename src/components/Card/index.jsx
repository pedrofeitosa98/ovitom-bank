import "./style.css";
import { FaTrash } from "react-icons/fa";

function Card({ transaction, removeTransaction }) {
  if (transaction.type === "entrada") {
    return (
      <div className="cardEntrada fadeInLeft">
        <div>
          <h3>{transaction.description}</h3>
          <p>R$ {transaction.value.toFixed(2).replace(".", ",")}</p>
          <button
            className="button--remove"
            onClick={() => removeTransaction(transaction)}
          >
            <FaTrash />
          </button>
        </div>
        <span className="helperText">{transaction.type}</span>
      </div>
    );
  }
  if (transaction.type === "despesa") {
    return (
      <div className="cardSaida fadeInLeft">
        <div>
          <h3>{transaction.description}</h3>
          <p>R$ {transaction.value.toFixed(2).replace(".", ",")}</p>
          <button
            className="button--remove"
            onClick={() => removeTransaction(transaction)}
          >
            <FaTrash />
          </button>
        </div>
        <span className="helperText">{transaction.type}</span>
      </div>
    );
  }
}

export default Card;
