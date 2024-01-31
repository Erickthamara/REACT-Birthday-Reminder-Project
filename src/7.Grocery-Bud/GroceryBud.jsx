import { useState } from "react";
import { IoTrashBin } from "react-icons/io5";
import { IoMdCheckmarkCircle } from "react-icons/io";
const GroceryBud = () => {
  const [grocerys, SetGrocerys] = useState([]);
  const handleSubmit = (e) => {
    e.preventdefault;
    console.log(e.target.value);
  };
  return (
    <section className="section-center">
      <h3>Grocery Bud</h3>
      <form action="" className="grocery-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <input type="text" className="grocery" />
          <button className="submit-btn">SUBMIT</button>
        </div>
      </form>

      <div className="grocery-container">test</div>
    </section>
  );
};

export default GroceryBud;
