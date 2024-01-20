import { useState } from "react";
import menulist from "./data";

const Menu = () => {
  console.log(menulist);
  const [menu, setMenu] = useState(menulist);
  //console.log(;
  return (
    <div className="section-center">
      {menu.map((item) => {
        const { id, title, price, img, desc } = item;
        return (
          <article key={id} className="menu-item">
            <div className="photo-box">
              {/* <img src={img} alt={title} className="photo" /> */}
            </div>

            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
