import React from "react";
import Button from "../../ui/button/Button";
import styles from "./SuccessPage.module.css";

import { AppPages } from "../../types";

export type LoginForm = {
  email: string;
  password: string;
};

type SuccessPageProps = {
  setPage: (page: AppPages) => void;
};

const SuccessPage: React.FC<SuccessPageProps> = ({ setPage }) => {
  return (
    <section className={styles.successPage}>
      <div className="container">
        <div className={styles.containerSuccesPage}>
          <h2 className={styles.title}>Success</h2>
          <p className={styles.text}>
            Email: confirmed.
            <br /> Your registration is now completed
          </p>
          <Button type="button" onClick={() => setPage(AppPages.LOGIN)}>
            Login
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;
