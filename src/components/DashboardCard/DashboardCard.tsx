import React from "react";
import { DashboardCardProps } from "../../types";
import "./DashboardCard.css";

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  description,
}) => {
  return (
    <div className="dashboard-card">
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
