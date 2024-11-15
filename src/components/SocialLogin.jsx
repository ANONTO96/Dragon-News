import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="mb-3 font-semibold">Login With :</h2>
            <div className="w-full space-y-2 flex flex-col">
                <button className="btn text-sky-500 hover:text-black"><FaGoogle />Login With Google</button>
                <button className="btn hover:text-sky-500"><FaGithub />Login With GitHub</button>

            </div>
        </div>
    );
};

export default SocialLogin;