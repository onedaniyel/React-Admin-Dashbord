import Home from "../pages/Home/Home";
import Analytics from "../pages/Analytics/Analytics";
import Sales from "../pages/Sales/Sales";
import Users from "../pages/Users/Users";
import NewUser from "../pages/NewUser/NewUser";
import Products from "../pages/Products/Products";
import Product from "../pages/Product/Product";
import Transactions from "../pages/Transactions/Transactions";
import Reports from "../pages/Reports/Reports";
import Mail from "../pages/Mail/Mail";
import Feedback from "../pages/Feedback/Feedback";
import Massages from "../pages/Massages/Massages";
import Manage from "../pages/Manage/Manage";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Analytics",
    element: <Analytics />,
  },
  {
    path: "/Sales",
    element: <Sales />,
  },
  {
    path: "/Users",
    element: <Users />,
  },
  {
    path: "/NewUser",
    element: <NewUser />,
  },
  {
    path: "/Products",
    element: <Products />,
  },
  {
    path: "/Product/:id",
    element: <Product />,
  },

  {
    path: "/transactions",
    element: <Transactions />,
  },
  {
    path: "/reports",
    element: <Reports />,
  },
  {
    path: "/mail",
    element: <Mail />,
  },
  {
    path: "/feedback",
    element: <Feedback />,
  },
  {
    path: "/massages",
    element: <Massages />,
  },
  {
    path: "/manage",
    element: <Manage />,
  },
];

export default routes;
