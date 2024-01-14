import React from "react";
import { CardProps } from "../../types";
import "./Card.css";

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="dashboard-card" role="article" aria-label={title}>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
