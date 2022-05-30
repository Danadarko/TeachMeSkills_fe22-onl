import React, { useState } from "react";
import Button from "../../ui/button/Button";
import Input from "../input/Input";
import { AppPages } from "../../types";
import styles from "./RegistrationPage.module.css";
import { ReactComponent as VerticalBar } from "../../assets/vertical-bar icon.svg";

export type LoginForm = {
  email: string;
  password: string;
};

type RegistrationPageProps = {
  setPage: (page: AppPages) => void;
  onRegistration: (form: LoginForm) => void;
};

const RegistrationPage: React.FC<RegistrationPageProps> = ({
  setPage,
  onRegistration,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className={styles.registrationPage}>
      <div className="container">
        <div className={styles.linksGroup}>
          <button
            type="button"
            onClick={() => setPage(AppPages.LOGIN)}
            className={styles.link}
          >
            Login
          </button>
          <VerticalBar />
          <button
            type="button"
            onClick={() => setPage(AppPages.REGISTRATION)}
            className={styles.link}
          >
            Registration
          </button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onRegistration({ email, password });
          }}
          className={styles.form}
        >
          <Input
            title="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            title="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button type="submit">Sign up</Button>
        </form>
      </div>
    </section>
  );
};

export default RegistrationPage;
