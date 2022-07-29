import { Route, Routes, useNavigate } from "react-router-dom";
import React from "react";
import LandingPage from "./components/landingPage/LandingPage";
import LoginPage, { LoginForm } from "./features/pages/loginPage/LoginPage";
import RegistrationPage from "./features/pages/registrationPage/RegistrationPage";
import SuccessPage from "./features/pages/successPage/SuccessPage";
import { AppPages } from "./types";
import "./App.css";
import { AppContext } from "./AppContext";
import InformationPage from "./features/pages/informationPage/InformationPage";
import Activate from "./features/pages/activate/Activate";
import { useAppDispatch } from "./hooks";
import { getUserInfo } from "./features/user/userSlice";
import SinglePostPage from "./features/pages/single-post-page/SinglePostPage";
import AddPostPage from "./features/pages/add-post-page/AddPostPage";
import AllPostsPage from "./features/pages/all-posts-page/AllPostsPage";
import MyPostsPage from "./features/pages/my-posts-page/MyPostsPage";

const users: LoginForm[] = [];
function App() {
  const navigate = useNavigate();
  const appRef = React.createRef<HTMLDivElement>();
  const dispatch = useAppDispatch();
  dispatch(getUserInfo());
  return (
    <div className="App" ref={appRef}>
      <AppContext.Provider value={appRef}>
        <Routes>
          <Route
            path={AppPages.LOGIN}
            element={
              <LoginPage
              /*onLogin={(form: LoginForm) => {
                  const foundUser = users.find(
                    (user) =>
                      user.email === form.email &&
                      user.password === form.password &&
                      user.name === form.name
                  );
                  if (!foundUser) {
                    return false;
                  }
                  navigate(AppPages.LANDING);
                  return true;
                }}*/
              />
            }
          />
          <Route
            path={AppPages.REGISTRATION}
            element={
              <RegistrationPage
                onRegistration={(form: LoginForm) => {
                  users.push(form);
                  navigate(AppPages.SUCCESS_PAGE);
                }}
              />
            }
          />
          <Route path={AppPages.SUCCESS_PAGE} element={<SuccessPage />}></Route>
          <Route path={AppPages.LANDING} element={<LandingPage />} />
          <Route path={AppPages.All_POSTS} element={<AllPostsPage />}></Route>
          <Route
            path={`${AppPages.All_POSTS}/:postId`}
            element={<SinglePostPage />}
          />
          <Route path={AppPages.MY_POSTS} element={<MyPostsPage />}></Route>
          <Route
            path={AppPages.INFORMATION_PAGE}
            element={<InformationPage />}
          />
          <Route
            path={`${AppPages.ACTIVATE}/:uid/:token`}
            element={<Activate />}
          />
          <Route path={AppPages.ADD_POST_PAGE} element={<AddPostPage />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
