import { Link } from "react-router-dom";
import { PATHS } from "../../Routes/Paths";

function Login() {
    return (
        <>
            <p>Login Form and Logic</p>

            <Link to={PATHS.app.profile}>

                <button className="border rounded ml-1 p-1">
                    Go to profile
                </button>

            </Link>
        </>
    );
}

export default Login;