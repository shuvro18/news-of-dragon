import { FaGithub, FaGoogle } from "react-icons/fa";


const LoginSection = () => {
    return (
        <div>
            <div className="flex items-center gap-1 btn border-blue-500 text-blue-500 mb-2">
                <FaGoogle />
                <p>Login With Google</p>
            </div>
            <div className="flex items-center gap-1 btn">
                <FaGithub />
                <p>Login With Github</p>
            </div>
        </div>
    );
};

export default LoginSection;