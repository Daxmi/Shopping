import React from "react";
import Button from "./Button";

const headersData = [
  {
    label: "Favourites",
    href: "",
  },
  {
    label: "Account",
    href: "",
  },
  {
    label: "Cart",
    href: "/logout",
    showCart: true,
  },
];
function Header(props) {
  const { countCartItems } = props;
  return (
    <header className="headingList">
      <div className="topCategory">
        <h1>All Categories</h1>
      </div>
      <div className="headerInput">
        <input type="text" placeholder="Search a product or a category" />
      </div>
      <hr />
      <div className="heading">
        {headersData.map(({ label, href, showCart }) => {
          if (showCart) {
            return (
              <>
                <Button key={label} label={label} />
                <span>{countCartItems.reduce((a, c) => a + c.qty, 0)}</span>
              </>
            );
          }
          return <Button key={label} label={label} />;
        })}
      </div>
    </header>
  );
}
export default Header;
