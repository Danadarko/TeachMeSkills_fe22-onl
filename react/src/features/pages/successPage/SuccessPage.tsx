import React from "react";
import Button from "../../../ui/button/Button";
import styles from "./SuccessPage.module.css";
import { Link } from "react-router-dom";
import { AppPages } from "../../../types";

export type LoginForm = {
  email: string;
  password: string;
  name: string;
};

type SuccessPageProps = {};

const SuccessPage: React.FC<SuccessPageProps> = () => {
  return (
    <section className={styles.successPage}>
      <div className="container">
        <div className={styles.containerSuccesPage}>
          <h2 className={styles.title}>Success</h2>
          <p className={styles.text}>
            Email: confirmed.
            <br /> Your registration is now completed
          </p>
          <Link to={AppPages.LOGIN}>
            <Button type="button" role="presentation">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;
