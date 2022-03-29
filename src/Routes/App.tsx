import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../containers/Layout";
import { Login } from "../pages/Login";
import { NewPassword } from "../pages/NewPassword";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import "../styles/global.scss";
import { SendEmail } from "../pages/SendEmail";
import PasswordRecovery from "../pages/PasswordRecovery";
import { MyAccount } from "../pages/MyAccount";
import CreateAccount from "../pages/CreateAccount";
import Checkout from "../pages/Checkout";
import { Orders } from "../pages/Orders";
import { AppContext } from "../context/AppContext";
import { useInitialState } from "../hooks/useInitialState";

const App = (): JSX.Element => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="new-password" element={<NewPassword />} />

            <Route path="send-mail" element={<SendEmail />} />
            <Route path="password-recovery" element={<PasswordRecovery />} />
            <Route path="my-account" element={<MyAccount />} />
            <Route path="create-account" element={<CreateAccount />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="orders" element={<Orders />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
