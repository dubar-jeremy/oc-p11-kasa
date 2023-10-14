import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../page /home/Home";


const AppRouter = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="housing" element={<p>Housing</p>} />
                <Route path="housing/:id" element={<p>Housing detail</p>} />
                <Route path="*" element={<p>Not found</p>} />
            </Route>
        </Routes>
    );
}
export default AppRouter;
