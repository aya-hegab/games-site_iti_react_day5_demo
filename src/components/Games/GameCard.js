import React from "react";
import { useNavigate } from "react-router-dom";

export default function GameCard({ gameItem, handleDeleteGameFn }) {
  const navigate = useNavigate();
  return (
    <div className="card h-100">
      <img src={gameItem.image} className="card-img-top" alt="..." />
      <div className="card-body">
        {/* {game.onSale && <span class="badge text-bg-success">On Sale</span>} */}
        {gameItem.onSale ? (
          <span class="badge text-bg-success">On Sale</span>
        ) : (
          <span class="badge text-bg-secondary">Original Price</span>
        )}

        <h5 className="card-title">{gameItem.title}</h5>
        {gameItem.tags.map((tag) => <span class="badge text-bg-primary mx-2">{tag}</span>)}
        <p className="card-text">{gameItem.description}</p>
        <p className="card-text">{gameItem.price} $</p>
        <button
          className="btn btn-danger"
          onClick={() => handleDeleteGameFn(gameItem.id)}
        >
          Delete
        </button>
        <button
          className="btn btn-link"
          onClick={() => navigate(`/game-details/${gameItem.id}?name=${gameItem.title}`)}
        >
          Redirect to details
        </button>
      </div>
    </div>
  );
}
