import { Outlet } from "react-router-dom";
import Header from "../shared/header/Header";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <p>footer</p>
        </div>
    );
}
export default MainLayout;
