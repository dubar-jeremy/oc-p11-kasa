import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../page /home/Home";
import Housing from "../page /housing/housing";
import NotFound from "../page /not-found/notFound";
import About from "../page /about/About";
import NotFoundLayout from "../components/Layout/NotFoundLayout";

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
