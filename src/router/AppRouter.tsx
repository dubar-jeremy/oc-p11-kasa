import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../page /home/Home";
import Housing from "../page /housing/housing";


const AppRouter = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="housing/:id" element={<Housing />} />
                <Route path="about" element={<p>about</p>}/>
                <Route path="*" element={<p>Not found</p>} />
                <Route path="not-found" element={<p>Not found</p>} />
            </Route>
        </Routes>
    );
}
export default AppRouter;
