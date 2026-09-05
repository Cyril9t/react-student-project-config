import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import { Outlet } from "react-router-dom";

function MainLayOut() {
    return (
        <div>
            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default MainLayOut;