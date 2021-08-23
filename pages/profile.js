import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";

import styles from "./profile.module.css";
// import useUser from '../lib/useUser' ???????????????????????

const Profile = () => {
  // const { user } = useUser({ redirectTo: '/login' }) ????????????????????

  const authSlice = useSelector((state) => state.authSlice);
  const router = useRouter();

  useEffect(() => {
    if (!authSlice.isLogIn) {
      {
        // redirectTo: "/signin";
        router.push("/signin");
      }
    }
  }, []);
  return (
    <>
      {/* className="container is-fluid" */}
      <div>
        <div className={styles.dad}>
          <div className={styles.cover}></div>
          <div className={styles.userProfileImg}></div>
          <div className={styles.userProfileInfo}>
            <p className="is-size-1 has-text-weight-bold">{authSlice.user}</p>
            <p className="is-size-4 ">Front End Developer</p>
            <div>
              <img src="/./icons/avatar.svg" className={styles.Myimg} />
              <span className={styles.span}>Lorem Text</span>
              <img src="/./icons/cart.svg" className={styles.Myimg} />
              <span className={styles.span}>Lorem Text</span>
              <img src="/./icons/delete.svg" className={styles.Myimg} />
              <span className={styles.span}>Lorem Text</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
