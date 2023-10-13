import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";


const AppRouter = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<p>Homepage</p>} />
                <Route path="housing" element={<p>Housing</p>} />
                <Route path="housing/:id" element={<p>Housing detail</p>} />
                <Route path="*" element={<p>Not found</p>} />
            </Route>
        </Routes>
    );
}
export default AppRouter;
