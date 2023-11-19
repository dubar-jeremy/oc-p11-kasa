import { Outlet } from "react-router-dom";
import Header from "../shared/header/Header";
import Footer from "../shared/footer/Footer";

const NotFoundLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer fixed={true} />
    </div>
  );
};
export default NotFoundLayout;
