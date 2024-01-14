import React, { useState } from "react";
import data from "./Data";

const Review = () => {
  //console.log(data);
  const [person, setPerson] = useState(0);

  const nextPerson = (id) => {
    if (id < data.length) {
      setPerson(person + 1);
    } else if (id === data.length) {
      setPerson(0);
    }
  };

  const previousPerson = (id) => {
    if (id === 1) {
      setPerson(data.length - 1);
    }
    if (id > 1) {
      setPerson(person - 1);
    }
  };
  const randomPerson = () => {
    const personNum = Math.floor(Math.random() * data.length) + 0;
    setPerson(personNum);
  };
  //console.log(person);
  //console.log("Hello world");
  const oneEmployee = data[person];
  return (
    <div>
      <div className="card-conatiner" key={oneEmployee.id}>
        <div className="img-container">
          <img src={oneEmployee.image} alt="" className="profile-img" />
        </div>
        <h3>{oneEmployee.name}</h3>
        <h4>{oneEmployee.job}</h4>
        <p>{oneEmployee.text}</p>
        <div className="next-buttons">
          <button
            className="btn2"
            type="button"
            onClick={() => previousPerson(oneEmployee.id)}
          >{`<`}</button>

          <button
            className="btn2"
            type="button"
            onClick={() => nextPerson(oneEmployee.id)}
          >{`>`}</button>
        </div>
        <button id="surprise" onClick={() => randomPerson()}>
          Surprise
        </button>
      </div>
    </div>
  );
};

export default Review;
