import { Link } from "react-router-dom";
import { PATHS } from "../../Routes/Paths";

function HeroSection() {
    return (
        <div>

            <h2>HomePage</h2>

            <p className="text-xl">Hero section...</p>

            <Link to={PATHS.auth.login}>

                <button className="border rounded ml-1 bg-green p-1 font-bold">
                    Login
                </button>

            </Link>

        </div>
    );
}

export default HeroSection;