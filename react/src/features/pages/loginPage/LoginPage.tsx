import React, { useState } from "react";
import Button from "../../../ui/button/Button";
import Input from "../../../ui/input/Input";
import { AppPages } from "../../../types";
import styles from "./LoginPage.module.css";
import { ReactComponent as VerticalBar } from "../../../assets/vertical-bar icon.svg";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../hooks";
import { login } from "../../auth/authSlice";
import Header from "../../../components/header/Header";

export type LoginForm = {
  email: string;
  password: string;
  name: string;
};

type LoginPageProps = {
  onLogin?: (form: LoginForm) => boolean;
};

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const emailRef = React.createRef<HTMLInputElement>();
  const dispatch = useAppDispatch();
  //const passwordRef = React.createRef<HTMLInputElement>();
  return (
    <section className={styles.loginPage}>
      <Header />
      <div className="container">
        <div className={styles.linksGroup}>
          <button type="button" className={styles.link}>
            Login
          </button>
          <VerticalBar />
          <Link to={AppPages.REGISTRATION} className={styles.link}>
            Registration
          </Link>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(login({ email, password }));
            console.log(e);
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
            ref={emailRef}
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
          <Button type="submit">Sign in</Button>
          <Button
            type="reset"
            onClick={() => {
              setName("");
              setEmail("");
              setPassword("");
            }}
          >
            Reset
          </Button>
          <p className="">
            Forgot your password?{" "}
            <Link to={AppPages.RESET_PASSWORD}>Reset password</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
