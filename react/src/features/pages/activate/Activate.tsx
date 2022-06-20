import React, { useEffect } from "react";
import Button from "../../../ui/button/Button";
import styles from "./Activate.module.css";
import { useParams } from "react-router-dom";
import { AppPages } from "../../../types";
import { useAppDispatch } from "../../../hooks";
import { activate } from "../../auth/authSlice";

type ActivateProps = {};

const Activate: React.FC<ActivateProps> = () => {
  const { uid, token } = useParams();

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (uid && token) {
      dispatch(activate({ uid, token }));
      console.log("Dispatch has been called");
    } else {
      console.log("Activate error: data is missing");
    }
  }, [dispatch, uid, token]);

  return (
    <div className={styles.wrapper}>Выполняется активация пользователя...</div>
  );
};

export default Activate;
