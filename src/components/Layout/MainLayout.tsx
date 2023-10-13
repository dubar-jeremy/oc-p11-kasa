import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <p>header</p>
            <Outlet />
            <p>footer</p>
        </div>
    );
}
export default MainLayout;
