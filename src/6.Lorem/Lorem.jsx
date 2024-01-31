import { useState } from "react";
import text from "./data";
const Lorem = () => {
  const [num, SetNum] = useState(0);
  const [maxNums, SetMaxNums] = useState(0);
  const [displayList, SetDisplayList] = useState([]);

  const grabNum = (e) => {
    SetNum(e.target.value);
  };
  const para = () => {
    const actualNums = text.filter((par, index) => {
      return index < num;
    });
    SetDisplayList(actualNums);
  };

  const handleClick = () => {
    SetMaxNums(num + 1);
    para();
  };

  return (
    <div>
      <div>
        <h4 className="label">Paragraph: </h4>
        <input type="number" placeholder="0" onChange={grabNum} />
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
