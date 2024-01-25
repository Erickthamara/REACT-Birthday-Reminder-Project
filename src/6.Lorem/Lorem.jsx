import { useState } from "react";
import text from "./data";
const Lorem = () => {
  const [num, SetNum] = useState(0);
  const [maxNums, SetMaxNums] = useState(0);
  //console.log(text);
  const grabNum = (e) => {
    //e.preventdefault();
    console.log(e.target.value);
    SetNum(e.target.value);
    SetMaxNums(e.target.value - 1);
    // console.log(maxNums);
    para();
  };
  const para = () => {
    console.log(`Num is ${num}`);
    const actualNums = text.filter((par, index) => {
      return index <= num;
    });
    SetMaxNums(actualNums);
    console.log(actualNums);
  };

  return (
    <div>
      <div>
        <h4 className="label">Paragraph: </h4>
        <input type="number" placeholder="0" onChange={grabNum} />
        <button className="btn">GENERATE</button>
      </div>
      {maxNums &&
        maxNums.map((txt, index) => {
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
