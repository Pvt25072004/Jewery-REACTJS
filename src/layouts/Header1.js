import classes from "./Header.module.css";
import { FaCartShopping } from "react-icons/fa6";
function Header1({ soluong, setShowCart }) {
  const onShowCartHandler = () => {
    setShowCart(true);
  };
  return (
    <div className={classes.row}>
      <div className={classes.cart} onClick={onShowCartHandler}>
        <FaCartShopping />
        <span className={classes.cartamount}>
          <sup>{soluong}</sup>
        </span>
      </div>
    </div>
  );
}

export default Header1;
