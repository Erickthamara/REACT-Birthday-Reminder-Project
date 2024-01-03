import React, { useEffect, useState } from "react";
import data from "./data";

const List = () => {
  const [people, setPeople] = useState(data);

  const totalBirthdays = people.length;

  return (
    <div className="container">
      <h3>The number of birthdays is {totalBirthdays}</h3>
      {people.map((person) => {
        const { name, age, image, id } = person;

        return (
          <div key={id} className="person">
            <h4 className="person">{name}</h4>
            <p className="person">{age}</p>
            <img src={image} alt="picture" className="person" />
          </div>
        );
      })}
      <button onClick={() => setPeople([])}>Clear List</button>
    </div>
  );
};

export default List;
