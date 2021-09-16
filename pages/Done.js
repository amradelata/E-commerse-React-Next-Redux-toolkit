import styles from "./Shipping.module.css";
import CheckOut from "../components/CheckOut";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chickOutDone } from "../store/slices/auth";
import Link from "next/link";
import Image from "next/image";

import { restMyCart } from "../store/slices/cart.slice";

const Done = () => {
  const authSlice = useSelector((state) => state.authSlice);
  const CartSlice = useSelector((state) => state.CartSlice);
  const dispatch = useDispatch();
  const [myDisabled, setmyDisabled] = useState(true);
  useEffect(() => {
    dispatch(restMyCart());
    // dispatch(chickOutDone());
  }, [dispatch]);
  const resetChickOutState = () => {
    dispatch(chickOutDone());
  };
  return (
    <div className={styles.myDone}>
      <CheckOut Done={myDisabled} />
      <div className={styles.Done}>
        <Image
          src="/./icons/checked.svg"
          alt="Picture of something nice"
          layout="fill"
          objectFit="cover"
        />
        {/* <img src="/./icons/checked.svg" /> */}
        <p className="is-size-2">Congratulations!</p>
        <p className="is-size-5">Your order is going to arrive soon</p>
        <Link href="/" passHref>
          <button className="button is-info" onClick={resetChickOutState}>
            go to shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Done;
