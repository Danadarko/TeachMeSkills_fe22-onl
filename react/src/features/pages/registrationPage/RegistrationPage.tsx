import React, { useState } from "react";
import Button from "../../../ui/button/Button";
import Input from "../../../ui/input/Input";
import { AppPages } from "../../../types";
import styles from "./RegistrationPage.module.css";
import { ReactComponent as VerticalBar } from "../../../assets/vertical-bar icon.svg";
import { Link } from "react-router-dom";

export type LoginForm = {
  email: string;
  password: string;
  name: string;
};

type RegistrationPageProps = {
  onRegistration: (form: LoginForm) => void;
};

const RegistrationPage: React.FC<RegistrationPageProps> = ({
  onRegistration,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <section className={styles.registrationPage}>
      <div className="container">
        <div className={styles.linksGroup}>
          <Link to={AppPages.LOGIN} className={styles.link}>
            Login
          </Link>
          <VerticalBar />
          <button type="button" className={styles.link}>
            Registration
          </button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onRegistration({ email, password, name });
          }}
          className={styles.form}
        >
          <Input
            title="User name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
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
          <Input
            title="Confirm your password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button type="submit">Sign up</Button>
          <p className="">
            If you have an account, you can{" "}
            <Link to={AppPages.LOGIN} className={styles.link}>
              login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegistrationPage;
