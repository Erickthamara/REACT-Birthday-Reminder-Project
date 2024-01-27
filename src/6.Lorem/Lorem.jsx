import { useEffect, useState } from "react";
import text from "./data";
const Lorem = () => {
  const [num, SetNum] = useState(0);
  const [maxNums, SetMaxNums] = useState(0);
  const [displayList, SetDisplayList] = useState([]);

  // const grabNum = (e) => {
  //   SetNum(e.target.value);
  //   console.log(`Targest is ${e.target.value}`);
  //   //console.log(`State num  is ${num}`);
  // };
  const para = () => {
    console.log(maxNums);
    const actualNums = text.filter((par, index) => {
      return index < num;
    });
    SetDisplayList(actualNums);
  };

  const handleClick = (e) => {
    console.log(num);
    SetMaxNums(num + 1);
    para();
  };
  // useEffect(() => {
  //   para()
  // }, [handleClick])

  return (
    <div>
      <div>
        <h4 className="label">Paragraph: </h4>
        <input
          type="number"
          placeholder="0"
          onChange={(e) => SetNum(e.target.value)}
        />
        <button className="btn" onClick={handleClick}>
          GENERATE
        </button>
      </div>
      {displayList &&
        displayList.map((txt, index) => {
          return (
            <section className="section" key={index}>
              {txt}
            </section>
          );
        })}
    </div>
  );
};

export default Lorem;
