import React from "react";

const MovieCredit =  ({ credit }) => {
  return (
    <>
      <p> {credit.job} </p>
      <p>{credit.name} </p>
    </>
  );
};
export default MovieCredit