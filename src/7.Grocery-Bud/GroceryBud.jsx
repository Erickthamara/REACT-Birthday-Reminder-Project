import { useState } from "react";
import { IoTrashBin } from "react-icons/io5";
import { IoMdCheckmarkCircle } from "react-icons/io";
const GroceryBud = () => {
  const [grocerys, setGrocerys] = useState([]);
  const [item, setItem] = useState("");
  const [edit, setEdit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(item);
    if (!item) {
      // alert no item
    } else if (item && edit) {
      // edit logic
    } else {
      const newGrocerys = [...grocerys, item];
      setGrocerys(newGrocerys);
      setItem("");
      console.log(newGrocerys);
    }
  };
  const handledeleteItem = (id) => {
    const newList = grocerys.filter((item, index) => {
      return index !== id;
    });
    setGrocerys(newList);
  };
  const handleClear = () => {
    setGrocerys([]);
  };
  return (
    <section className="section-center">
      {}
      <h3>Grocery Bud</h3>
      <form action="" className="grocery-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="eg.milk"
          />

          <button className="submit-btn" type="submit">
            {edit ? "EDIT" : "SUBMIT"}
          </button>
        </div>
      </form>
      {grocerys.length !== 0 &&
        grocerys.map((foodItem, index) => {
          return (
            <div className="grocery-container" key={index}>
              {" "}
              <article className="grocery-item">
                <p className="title">{foodItem}</p>
                <button>
                  <IoTrashBin onClick={() => handledeleteItem(index)} />
                </button>
                <button>
                  <IoMdCheckmarkCircle
                    onClick={() => console.log("hello world")}
                  />
                </button>
              </article>
            </div>
          );
        })}
      {grocerys.length !== 0 && (
        <button className="clear-btn" onClick={handleClear}>
          CLEAR
        </button>
      )}
    </section>
  );
};

export default GroceryBud;
