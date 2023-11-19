import { Route, Routes } from "react-router-dom";
import Home from "../page /home/Home";
import Housing from "../page /housing/housing";
import NotFound from "../page /not-found/notFound";
import About from "../page /about/About";
import MainLayout from "../components/layout/MainLayout";
import NotFoundLayout from "../components/layout/NotFoundLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="housing/:id" element={<Housing />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route element={<NotFoundLayout />}>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
export default AppRouter;
