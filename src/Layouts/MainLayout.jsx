import React from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div >
      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
