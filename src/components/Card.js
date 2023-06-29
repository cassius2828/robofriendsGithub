import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className=" tc bg-light-green br3 pa3 grow ma2 shadow-5 dib bw2">
      {/* main container */}
      <img src={`https://robohash.org/${id}?200x200`} alt="robo profile pic" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
      {/* main container */}
    </div>
  );
};

export default Card;
