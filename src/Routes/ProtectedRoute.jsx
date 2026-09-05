import { Navigate, Outlet, replace } from "react-router-dom";
import { PATHS } from "./Paths";

function ProtectedRoutes() {

    /*
     * PROTECTED ROUTES
     
     * Implement your protected route logic here.
    
     * - Authentication: Check if the user is logged in.
     * - Authorization: Check if the user has permission to access
     *   the requested route.
     * 
     * Example:
     
     */
    const isUserAuthenticated = false;

    if (!isUserAuthenticated) {
        return <Navigate to={PATHS.auth.login} replace />
    }

    return (
        <Outlet />
    );
}

export default ProtectedRoutes;