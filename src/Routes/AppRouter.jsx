import { Route, Routes } from "react-router-dom";
import MainLayOut from "../Layouts/MainLayout";
import HomePage from "../pages/Home/Home";
import { PATHS } from "./Paths";
import LoginPage from "../pages/Login/Login";
import ProtectedRoutes from "./ProtectedRoute";
import ProfilePage from "../pages/Profile/profile";

function AppRouter() {
    return (
        <Routes>
            <Route element={<MainLayOut />}>

                <Route path={PATHS.public.home} element={<HomePage />} />
                <Route path={PATHS.auth.login} element={<LoginPage />} />

                {/* Add pages that require authentication here */}

                <Route element={<ProtectedRoutes />} >

                    <Route path={PATHS.app.profile} element={<ProfilePage />} />
                </Route>

            </Route>
        </Routes>
    );
}

export default AppRouter