import { useRoutes } from "react-router-dom";
import HomePage from "../../pages/Home/HomePage";
import ContactsPage from "../../pages/Contacts/ContactsPage";
import Experience from "../../pages/Experience/Experience";
import Skills from "../../pages/Skills/Skills";

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
    {
      element: <Skills />,
      path: "/skills",
    },
    {
      element: <Experience />,
      path: "/experience",
    },
  ]);

  return routes;
};

export default AppRoutes;
