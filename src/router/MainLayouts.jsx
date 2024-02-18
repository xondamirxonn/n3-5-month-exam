import { About } from "../Pages/About/About";
import { Home } from "../Pages/Home/Home";
import { NotFound } from "../Pages/NotFound/NotFound";
import { Shop } from "../Pages/Shop/Shop";
import { ShopSingle } from "../Pages/ShopSingle/Shop-single";

export const main_pages = [
  {
    component: <Home />,
  },

  {
    component: <About />,
    path: "about",
  },

  {
    component: <ShopSingle />,
    path: "/shops/:id",
  },

  {
    component: <Shop />,
    path: "shop",
  },

  {
    component: <NotFound />,
    path: "*",
  },

  {
    component: <NotFound />,
    path: "shops/*",
  },
];
