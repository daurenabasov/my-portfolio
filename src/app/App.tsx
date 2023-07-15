import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Layout from "./layout/Layout";
import { Suspense } from "react";
import Loader from "../components/Loader/Loader";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Layout>
          <AppRoutes />
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
