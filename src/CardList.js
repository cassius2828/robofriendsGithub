import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardsArr = robots.map((i) => {
    return (
      <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    );
  });
  return <>{cardsArr}</>;
};

export default CardList;
