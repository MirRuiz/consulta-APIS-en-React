import React from "react";
import { Link, useParams } from "react-router-dom";
import "./detail.css"


export const DetailPage: React.FC = () => {
  const { id } = useParams();
 

  return (
    <div className="styleDetail">
      <h2> Detail page</h2>
      <h3>User Id: {id}</h3>
      <Link to="/list">Back to list page</Link>
    </div>
  );
};
