import { useRoutes } from "react-router-dom";
import HomePage from "../../pages/Home/HomePage";
import ContactsPage from "../../pages/Contacts/ContactsPage";

const AppRoutes = () => {
  const routes = useRoutes([
    {
      element: <HomePage />,
      path: "/",
    },
    {
      element: <ContactsPage />,
      path: "/contacts",
    },
  ]);

  return routes;
};

export default AppRoutes;
