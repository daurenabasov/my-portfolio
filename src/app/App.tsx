import { Suspense, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Layout from "./layout/Layout";
import Loader from "../components/Loader/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    },1800);
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        {isLoading ? (
          <Loader />
        ) : (
          <Layout>
            <AppRoutes />
          </Layout>
        )}
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
