import { useEffect, useRef } from "react";
import { getProdcutsData } from "../store/slices/products.slice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./home.module.css";
import { set_cart_array_value } from "../store/slices/cart.slice";
import Link from "next/link";
import ProductNave from "../components/ProductNave";
import { set_in_my_cart } from "../store/slices/products.slice";
// import Header from "../components/Header";

export default function Home() {
  const addToCartBtn = useRef();
  const dispatch = useDispatch();
  const ProdcutsSlice = useSelector((state) => state.ProdcutsSlice);
  const authSlice = useSelector((state) => state.authSlice);

  useEffect(() => {
    // ANY reducer or thunk function MUST be called inside a dispatch()
    dispatch(getProdcutsData());
  }, []);
  const addToCart = (item, index) => {
    dispatch(set_cart_array_value(item, index));
    dispatch(set_in_my_cart({ item, index }));
  };

  return (
    <div className={`container is-fluid ${styles.dad}`}>
      <div className={styles.ProductNave}>
        <ProductNave />
      </div>

      <div className={styles.myCards}>
        {ProdcutsSlice.productsArr.map((item, index) => (
          <div key={item.id} className={`card ${styles.myCard}`}>
            <Link href={`/${item.id}`} passHref>
              <a>
                <header className="card-header">
                  <p className="card-header-title">Shop item {index}</p>
                </header>
                <div className="card-content">
                  <div>
                    <div
                      className={styles.Image}
                      style={{
                        backgroundImage: `url(${item.img_url})`,
                      }}
                    ></div>
                  </div>
                  <p className="card-header-title">
                    {item.name + " "}
                    {"  /  " + item.price + "$"}
                  </p>
                </div>
              </a>
            </Link>
            <footer className="card-footer">
              {authSlice.isLogIn && !item.in_my_cart ? (
                <button
                  ref={addToCartBtn}
                  className="card-footer-item button is-success"
                  onClick={() => addToCart(item, index)}
                >
                  add me to cart
                </button>
              ) : (
                ""
              )}
            </footer>
          </div>
        ))}
      </div>
    </div>
  );
}
