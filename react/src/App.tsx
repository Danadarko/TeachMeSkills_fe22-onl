import React, { useState } from "react";
import styles from "./App.module.css";
import LandingPage from "./components/landingPage/LandingPage";
import LoginPage, { LoginForm } from "./components/loginPage/LoginPage";
import RegistrationPage from "./components/registrationPage/RegistrationPage";
import SuccessPage from "./components/successPage/SuccessPage";
import { AppPages } from "./types";

const users: LoginForm[] = [];
function App() {
  const [currentPage, setCurrentPage] = useState(AppPages.LOGIN);

  const renderPage = (
    currentPage: AppPages
  ): React.ReactElement | string | number => {
    switch (currentPage) {
      case AppPages.LOGIN:
        return (
          <LoginPage
            onLogin={(form: LoginForm) => {
              const foundUser = users.find(
                (user) =>
                  user.email === form.email && user.password === form.password
              );
              if (!foundUser) {
                return false;
              }
              setCurrentPage(AppPages.LANDING);
              return true;
            }}
            setPage={setCurrentPage}
          />
        );
      case AppPages.REGISTRATION:
        return (
          <RegistrationPage
            onRegistration={(form: LoginForm) => {
              users.push(form);
              setCurrentPage(AppPages.SUCCESS_PAGE);
            }}
            setPage={setCurrentPage}
          />
        );
      case AppPages.LANDING:
        return <LandingPage />;
      case AppPages.RESET_PASSWORD:
        return "RESET_PASSWORD";
      case AppPages.SUCCESS_PAGE:
        return <SuccessPage setPage={setCurrentPage} />;
      default:
        return 404;
    }
  };

  return <div className={styles.App}>{renderPage(currentPage)}</div>;
}

export default App;
